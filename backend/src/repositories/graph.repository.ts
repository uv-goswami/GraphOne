import { prisma } from '../lib/prisma';

export interface GraphNode {
  id: string;
  type: 'company' | 'investor' | 'product' | 'tag';
  label: string;
  slug?: string;
  logoUrl?: string | null;
}

export interface GraphEdge {
  source: string;
  target: string;
  relationship: string;
}

interface GraphNode {
  id: string;
  type: 'company' | 'investor' | 'product' | 'tag';
  label: string;
  slug?: string;
  logoUrl?: string | null;
}

interface GraphEdge {
  source: string;
  target: string;
  relationship: string;
}

export class GraphRepository {
  static async getEcosystemGraph(companySlug: string): Promise<{
    nodes: GraphNode[];
    edges: GraphEdge[];
  }> {
    // Fetch the company with all related data
    const company = await prisma.company.findUnique({
      where: { slug: companySlug },
      include: {
        fundingRounds: {
          include: {
            leadInvestor: true,
          },
        },
        products: true,
        tags: true,
        relatedFrom: {
          include: {
            sourceCompany: true,
          },
        },
        relatedTo: {
          include: {
            targetCompany: true,
          },
        },
      },
    });

    if (!company) {
      throw new Error('Company not found');
    }

    const nodes: GraphNode[] = [];
    const edges: GraphEdge[] = [];
    const nodeIds = new Set<string>();

    // Helper to add a node
    const addNode = (node: GraphNode) => {
      if (!nodeIds.has(node.id)) {
        nodeIds.add(node.id);
        nodes.push(node);
      }
    };

    // Add the main company node
    addNode({
      id: company.id,
      type: 'company',
      label: company.name,
      slug: company.slug,
      logoUrl: company.logoUrl,
    });

    // 1. Add investors (from funding rounds)
    const investorIds = new Set<string>();
    for (const round of company.fundingRounds) {
      if (round.leadInvestor) {
        const inv = round.leadInvestor;
        const invId = inv.id;
        if (!investorIds.has(invId)) {
          investorIds.add(invId);
          addNode({
            id: invId,
            type: 'investor',
            label: inv.name,
            slug: inv.slug,
            logoUrl: inv.logoUrl,
          });
          // Edge: company -> investor (funded_by)
          edges.push({
            source: company.id,
            target: invId,
            relationship: 'funded_by',
          });
        }
      }
      // Also co-investors are stored as slugs in coInvestors array
      // We need to resolve those slugs to investor IDs
      if (round.coInvestors && round.coInvestors.length > 0) {
        const coInvestorSlugs = round.coInvestors;
        const coInvestors = await prisma.investor.findMany({
          where: { slug: { in: coInvestorSlugs } },
          select: { id: true, name: true, slug: true, logoUrl: true },
        });
        for (const coInv of coInvestors) {
          const invId = coInv.id;
          if (!investorIds.has(invId)) {
            investorIds.add(invId);
            addNode({
              id: invId,
              type: 'investor',
              label: coInv.name,
              slug: coInv.slug,
              logoUrl: coInv.logoUrl,
            });
            // Edge: company -> co-investor (also funded_by)
            edges.push({
              source: company.id,
              target: invId,
              relationship: 'funded_by',
            });
          }
        }
      }
    }

    // 2. Add co-investor relationships among investors
    // For each funding round, connect investors who co-invested
    for (const round of company.fundingRounds) {
      const leadId = round.leadInvestor?.id;
      // If lead exists and there are co-investors, create edges between lead and each co-investor
      if (leadId && round.coInvestors && round.coInvestors.length > 0) {
        // Resolve co-investor slugs to IDs
        const coSlugs = round.coInvestors;
        const coInvestors = await prisma.investor.findMany({
          where: { slug: { in: coSlugs } },
          select: { id: true },
        });
        for (const coInv of coInvestors) {
          // Edge: lead investor -> co-investor (co_invested_with)
          edges.push({
            source: leadId,
            target: coInv.id,
            relationship: 'co_invested_with',
          });
        }
      }
    }

    // 3. Add products
    for (const product of company.products) {
      const nodeId = product.id;
      addNode({
        id: nodeId,
        type: 'product',
        label: product.name,
        slug: product.slug,
        logoUrl: product.websiteUrl || null,
      });
      edges.push({
        source: company.id,
        target: nodeId,
        relationship: 'owns_product',
      });
    }

    // 4. Add tags
    for (const tag of company.tags) {
      const nodeId = tag.id;
      addNode({
        id: nodeId,
        type: 'tag',
        label: tag.name,
        slug: tag.slug,
        logoUrl: null,
      });
      edges.push({
        source: company.id,
        target: nodeId,
        relationship: 'has_tag',
      });
    }

    // 5. Add competitors (from CompanyRelationship)
    // relatedFrom: source is the current company, target is other company
    for (const rel of company.relatedFrom) {
      const targetCompany = rel.targetCompany;
      const nodeId = targetCompany.id;
      addNode({
        id: nodeId,
        type: 'company',
        label: targetCompany.name,
        slug: targetCompany.slug,
        logoUrl: targetCompany.logoUrl,
      });
      edges.push({
        source: company.id,
        target: nodeId,
        relationship: rel.relationshipType,
      });
    }
    // relatedTo: current company is the target
    for (const rel of company.relatedTo) {
      const sourceCompany = rel.sourceCompany;
      const nodeId = sourceCompany.id;
      addNode({
        id: nodeId,
        type: 'company',
        label: sourceCompany.name,
        slug: sourceCompany.slug,
        logoUrl: sourceCompany.logoUrl,
      });
      edges.push({
        source: sourceCompany.id,
        target: company.id,
        relationship: rel.relationshipType,
      });
    }

    return { nodes, edges };
  }
}