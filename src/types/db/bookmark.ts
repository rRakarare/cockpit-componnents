import { z } from 'zod';

export const BookmarkSchema = z.object({
  id: z.bigint(),
  bookmark_uuid: z.string().uuid(),
  mongo_uuid: z.string().nullable(),
  user_id: z.bigint(),
  prompt_id: z.bigint().nullable(),
  project_id: z.bigint().nullable(),
  chat_id: z.bigint().nullable(),
  data_silo_id: z.bigint().nullable(),
  message_id: z.bigint(),
  bookmark_name: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});