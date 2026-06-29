import { PrismaClient } from '../../generated/prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Create a PostgreSQL connection pool using the DATABASE_URL from env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Instantiate the Prisma adapter with the pool
const adapter = new PrismaPg(pool);

// Create the Prisma client with the adapter
export const prisma = new PrismaClient({ adapter });

// Optional: handle graceful shutdown
export async function disconnectPrisma() {
  await prisma.$disconnect();
  await pool.end();
}