import { z } from "zod";

export const GroupSchema = z.object({
    id: z.number(),
    group_uuid: z.string().uuid(),
    company_id: z.number(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    created_by: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
  });

export type GroupType = z.infer<typeof GroupSchema>;