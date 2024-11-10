import { z } from 'zod';

export const MessageSchema = z.object({
  id: z.bigint(),
  message_uuid: z.string().uuid(),
  mongo_uuid: z.string().nullable(),
  chat_id: z.bigint(),
  parent_id: z.bigint().nullable(),
  role: z.enum(['user', 'assistant', 'system']),
  ai_model_id: z.number().int().nullable(),
  content: z.string(),
  is_edited: z.boolean().default(false),
  edit_version: z.number().int().default(0),
  is_active: z.boolean().default(true),
  is_pinned: z.boolean().default(false),
  sentiment_score: z.number().nullable(),
  toxicity_score: z.number().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});