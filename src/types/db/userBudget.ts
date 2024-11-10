import { z } from 'zod';

export const UserBudgetSchema = z.object({
  id: z.bigint(),
  user_budget_uuid: z.string().uuid(),
  user_id: z.bigint(),
  budget: z.number(),
  total_consumed: z.number(),
  year: z.number().int(),
  month: z.number().int().min(1).max(12),
  created_at: z.date(),
  updated_at: z.date(),
});