import { z } from 'zod';

export const AI_ModelSchema = z.object({
  id: z.number().int().positive(),
  ai_model_uuid: z.string().uuid(),
  ai_model_name: z.string().nullable(),
  ai_model_context_length: z.number().int().nullable(),
  ai_model_project_context_length: z.number().int().nullable(),
  input_cost: z.number().nullable(),
  image_other_cost: z.number().nullable(),
  output_cost: z.number().nullable(),
  image_standard_cost: z.number().nullable(),
  icon: z.string().nullable(),
  status: z.enum(['active', 'disabled']),
  type: z.enum(['image', 'text', 'audio', 'video', 'multi_model']),
});