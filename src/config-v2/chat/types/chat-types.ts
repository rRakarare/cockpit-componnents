import { z } from 'zod';

// Define the Zod schema for the Chat model
export const ChatSchema = z.object({
  // Basic fields
  id: z.bigint(),
  chat_uuid: z.string().uuid(),
  mongo_uuid: z.string().nullable(),
  user_id: z.bigint(),
  title: z.string(),
  summary: z.string(),

  // Related IDs (nullable)
  assistant_id: z.bigint().nullable(),
  thread_id: z.bigint().nullable(),
  shared_chat_id: z.bigint().nullable(),
  project_id: z.bigint().nullable(),
  data_silo_id: z.bigint().nullable(),

  // Boolean flags
  is_pinned: z.boolean().default(false),
  is_favorite: z.boolean().default(false),

  // Other fields
  prompt_id: z.bigint(),
  chat_type: z.string(),

  // Timestamps (assuming Sequelize adds these)
  created_at: z.date(),
  updated_at: z.date(),
});

// Derive the TypeScript type from the Zod schema
export type ChatType = z.infer<typeof ChatSchema>;

export type DisplayChatType = Pick<ChatType, 'id' | 'title' >;

