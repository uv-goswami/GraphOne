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

export class GraphRepository {
  static async getEcosystemGraph(companySlug: string): Promise<{
    nodes: GraphNode[];
    edges: GraphEdge[];
  }> {
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

    const addNode = (node: GraphNode) => {
      if (!nodeIds.has(node.id)) {
        nodeIds.add(node.id);
        nodes.push(node);
      }
    };

    // Add main company
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
        if (!investorIds.has(inv.id)) {
          investorIds.add(inv.id);
          addNode({
            id: inv.id,
            type: 'investor',
            label: inv.name,
            slug: inv.slug,
            logoUrl: inv.logoUrl,
          });
          edges.push({
            source: company.id,
            target: inv.id,
            relationship: 'funded_by',
          });
        }
      }
      // Co-investors
      if (round.coInvestors && round.coInvestors.length > 0) {
        const coInvestorSlugs = round.coInvestors;
        const coInvestors = await prisma.investor.findMany({
          where: { slug: { in: coInvestorSlugs } },
          select: { id: true, name: true, slug: true, logoUrl: true },
        });
        for (const coInv of coInvestors) {
          if (!investorIds.has(coInv.id)) {
            investorIds.add(coInv.id);
            addNode({
              id: coInv.id,
              type: 'investor',
              label: coInv.name,
              slug: coInv.slug,
              logoUrl: coInv.logoUrl,
            });
            edges.push({
              source: company.id,
              target: coInv.id,
              relationship: 'funded_by',
            });
          }
        }
      }
    }

    // 2. Co-investor relationships
    for (const round of company.fundingRounds) {
      const leadId = round.leadInvestor?.id;
      if (leadId && round.coInvestors && round.coInvestors.length > 0) {
        const coSlugs = round.coInvestors;
        const coInvestors = await prisma.investor.findMany({
          where: { slug: { in: coSlugs } },
          select: { id: true },
        });
        for (const coInv of coInvestors) {
          edges.push({
            source: leadId,
            target: coInv.id,
            relationship: 'co_invested_with',
          });
        }
      }
    }

    // 3. Products
    for (const product of company.products) {
      addNode({
        id: product.id,
        type: 'product',
        label: product.name,
        slug: product.slug,
        logoUrl: product.websiteUrl || null,
      });
      edges.push({
        source: company.id,
        target: product.id,
        relationship: 'owns_product',
      });
    }

    // 4. Tags
    for (const tag of company.tags) {
      addNode({
        id: tag.id,
        type: 'tag',
        label: tag.name,
        slug: tag.slug,
        logoUrl: null,
      });
      edges.push({
        source: company.id,
        target: tag.id,
        relationship: 'has_tag',
      });
    }

    // 5. Competitors (relatedFrom)
    for (const rel of company.relatedFrom) {
      const target = rel.sourceCompany; // sourceCompany is the related company
      addNode({
        id: target.id,
        type: 'company',
        label: target.name,
        slug: target.slug,
        logoUrl: target.logoUrl,
      });
      edges.push({
        source: company.id,
        target: target.id,
        relationship: rel.relationshipType,
      });
    }

    // 6. Competitors (relatedTo)
    for (const rel of company.relatedTo) {
      const source = rel.targetCompany; // targetCompany is the related company
      addNode({
        id: source.id,
        type: 'company',
        label: source.name,
        slug: source.slug,
        logoUrl: source.logoUrl,
      });
      edges.push({
        source: source.id,
        target: company.id,
        relationship: rel.relationshipType,
      });
    }

    return { nodes, edges };
  }
}