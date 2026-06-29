import { z } from 'zod';

export const createCompanySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  slug: z.string()
    .min(1, 'Slug is required')
    .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase alphanumeric with hyphens'),
  description: z.string().optional(),
  category: z.string().min(1, 'Category is required'),
  fundingTotal: z.number().nullable().optional(),
  employeeCount: z.number().nullable().optional(),
  foundedYear: z.number().nullable().optional(),
  hqCity: z.string().nullable().optional(),
  hqCountry: z.string().nullable().optional(),
  logoUrl: z.string().url('Logo URL must be a valid URL').nullable().optional(),
  website: z.string().url('Website must be a valid URL').nullable().optional(),
  stage: z.string().nullable().optional(),
  isUnicorn: z.boolean().default(false),
  valuation: z.number().nullable().optional(),
});

export const claimCompanySchema = z.object({
  claimedBy: z.string().min(1, 'Claimer identifier is required'),
});

export type CreateCompanyInput = z.infer<typeof createCompanySchema>;
export type ClaimCompanyInput = z.infer<typeof claimCompanySchema>;