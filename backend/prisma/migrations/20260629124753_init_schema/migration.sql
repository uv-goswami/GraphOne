/*
  Warnings:

  - You are about to drop the `articles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clusters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ingest_jobs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `refresh_tokens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TagType" AS ENUM ('company', 'product', 'news');

-- CreateEnum
CREATE TYPE "RelationshipType" AS ENUM ('competitor', 'partner', 'subsidiary', 'parent');

-- DropForeignKey
ALTER TABLE "articles" DROP CONSTRAINT "articles_cluster_id_fkey";

-- DropForeignKey
ALTER TABLE "clusters" DROP CONSTRAINT "clusters_ingest_job_id_fkey";

-- DropForeignKey
ALTER TABLE "refresh_tokens" DROP CONSTRAINT "refresh_tokens_user_id_fkey";

-- DropTable
DROP TABLE "articles";

-- DropTable
DROP TABLE "clusters";

-- DropTable
DROP TABLE "ingest_jobs";

-- DropTable
DROP TABLE "refresh_tokens";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "funding_total" BIGINT,
    "employee_count" INTEGER,
    "founded_year" INTEGER,
    "hq_city" TEXT,
    "hq_country" TEXT,
    "logo_url" TEXT,
    "website" TEXT,
    "stage" TEXT,
    "is_unicorn" BOOLEAN DEFAULT false,
    "valuation" BIGINT,
    "growth_score" DOUBLE PRECISION DEFAULT 0,
    "last_scraped_at" TIMESTAMP(3),
    "data_confidence_score" DOUBLE PRECISION DEFAULT 0,
    "claimed_by" TEXT,
    "claimed_at" TIMESTAMP(3),

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" TEXT,
    "bio" TEXT,
    "aum" BIGINT,
    "portfolio_count" INTEGER,
    "stage_focus" TEXT[],
    "sector_focus" TEXT[],
    "location" TEXT,
    "logo_url" TEXT,
    "avg_check_size" BIGINT,
    "fund_number" INTEGER,

    CONSTRAINT "investors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "founders" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT,
    "company_id" TEXT NOT NULL,
    "bio" TEXT,
    "twitter" TEXT,
    "linkedin" TEXT,
    "location" TEXT,
    "photo_url" TEXT,

    CONSTRAINT "founders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "launch_date" TIMESTAMP(3),
    "upvotes" INTEGER DEFAULT 0,
    "website_url" TEXT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funding_rounds" (
    "id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "round_type" TEXT NOT NULL,
    "amount" BIGINT,
    "currency" TEXT DEFAULT 'USD',
    "date" TIMESTAMP(3) NOT NULL,
    "lead_investor_id" TEXT,
    "co_investors" TEXT[],

    CONSTRAINT "funding_rounds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_articles" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL,
    "source" TEXT NOT NULL,
    "tag" TEXT,
    "related_company_ids" TEXT[],
    "summary" TEXT,

    CONSTRAINT "news_articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" "TagType" NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_relationships" (
    "id" TEXT NOT NULL,
    "source_company_id" TEXT NOT NULL,
    "target_company_id" TEXT NOT NULL,
    "relationship_type" "RelationshipType" NOT NULL,

    CONSTRAINT "company_relationships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NewsArticleCompanies" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_NewsArticleCompanies_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CompanyTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CompanyTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ProductTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProductTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_slug_key" ON "companies"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "investors_slug_key" ON "investors"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "founders_slug_key" ON "founders"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "founders_company_id_slug_key" ON "founders"("company_id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "products_slug_key" ON "products"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "tags_slug_key" ON "tags"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "company_relationships_source_company_id_target_company_id_r_key" ON "company_relationships"("source_company_id", "target_company_id", "relationship_type");

-- CreateIndex
CREATE INDEX "_NewsArticleCompanies_B_index" ON "_NewsArticleCompanies"("B");

-- CreateIndex
CREATE INDEX "_CompanyTags_B_index" ON "_CompanyTags"("B");

-- CreateIndex
CREATE INDEX "_ProductTags_B_index" ON "_ProductTags"("B");

-- AddForeignKey
ALTER TABLE "founders" ADD CONSTRAINT "founders_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funding_rounds" ADD CONSTRAINT "funding_rounds_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funding_rounds" ADD CONSTRAINT "funding_rounds_lead_investor_id_fkey" FOREIGN KEY ("lead_investor_id") REFERENCES "investors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_relationships" ADD CONSTRAINT "company_relationships_source_company_id_fkey" FOREIGN KEY ("source_company_id") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_relationships" ADD CONSTRAINT "company_relationships_target_company_id_fkey" FOREIGN KEY ("target_company_id") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NewsArticleCompanies" ADD CONSTRAINT "_NewsArticleCompanies_A_fkey" FOREIGN KEY ("A") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NewsArticleCompanies" ADD CONSTRAINT "_NewsArticleCompanies_B_fkey" FOREIGN KEY ("B") REFERENCES "news_articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyTags" ADD CONSTRAINT "_CompanyTags_A_fkey" FOREIGN KEY ("A") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyTags" ADD CONSTRAINT "_CompanyTags_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductTags" ADD CONSTRAINT "_ProductTags_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductTags" ADD CONSTRAINT "_ProductTags_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
