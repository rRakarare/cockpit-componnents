import { z } from 'zod';

export const LabelSchema = z.object({
  id: z.bigint(),
  label_uuid: z.string().uuid(),
  name: z.string().nullable(),
  company_id: z.bigint().nullable(),
  is_active: z.boolean().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});