import { z } from 'zod';

// Database Model Definition

export const GroupSchema = z.object({
  id: z.bigint(),
  group_uuid: z.string().uuid(),
  company_id: z.bigint(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  created_by: z.bigint(),
});

export type GroupType = z.infer<typeof GroupSchema>;

