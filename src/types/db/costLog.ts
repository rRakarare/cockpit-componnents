import { z } from 'zod';

export const CostLogSchema = z.object({
  id: z.bigint(),
  cost_log_uuid: z.string().uuid(),
  user_id: z.bigint(),
  action: z.string(),
  ai_model_id: z.number().int(),
  created_image: z.string().nullable(),
  input_tokens: z.bigint().nullable(),
  output_tokens: z.bigint().nullable(),
  total_cost: z.number().nullable(),
});