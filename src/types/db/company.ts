import { z } from 'zod';

export const CompanySchema = z.object({
  id: z.bigint(),
  company_uuid: z.string().uuid(),
  mongo_uuid: z.string().nullable(),
  name: z.string(),
  address: z.string().nullable(),
  city: z.string().nullable(),
  postcode: z.string().nullable(),
  country: z.string().nullable(),
  main_logo: z.string().nullable(),
  banner_logo: z.string().nullable(),
  company_instructions: z.string().nullable(),
  max_accounts: z.number().int().nullable(),
  discount: z.number().default(1),
  plan: z.string(),
  status: z.enum(['active', 'disabled']),
});