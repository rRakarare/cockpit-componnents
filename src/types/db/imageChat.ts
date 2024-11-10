import { z } from 'zod';

export const ChatImageSchema = z.object({
  id: z.bigint(),
  image_uuid: z.string().uuid(),
  mongo_uuid: z.string().nullable(),
  user_id: z.bigint(),
  title: z.string().nullable(),
  input_prompt: z.string().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});