import { z } from 'zod';
import { PromptSchema } from './prompt';
import { ProjectSchema } from './project';
import { DataSiloSchema } from './dataSilo';

// Database Model Definition

export const ChatSchema = z.object({
  id: z.bigint(),
  chat_uuid: z.string().uuid(),
  mongo_uuid: z.string().nullable(),
  owner_id: z.bigint(),
  title: z.string(),
  summary: z.string().nullable(),
  ai_model_id: z.string().nullable(),
  thread_id: z.string().nullable(),
  shared_chat_id: z.bigint().nullable(),
  project_id: z.bigint().nullable(),
  data_silo_id: z.bigint().nullable(),
  prompt_id: z.bigint().nullable(),
  chat_type: z.string(),
  access_type: z.enum(['shared', 'private']).default('private'),
  created_at: z.date(),
  updated_at: z.date()
});

export type ChatType = z.infer<typeof ChatSchema>;

// To query multiple items in List view

export const ChatSimpleSchema = ChatSchema.pick({
  chat_uuid: true,
  owner_id: true,
  title: true,
  summary: true,
  ai_model_id: true,
  access_type: true,
  created_at: true,
  updated_at: true
});

export type ChatSimpleType = z.infer<typeof ChatSimpleSchema>;

// To query a single item in Detail view

export const ChatDetailSchema = ChatSchema.extend({
  prompt: PromptSchema.optional().nullable(),
  project: ProjectSchema.optional().nullable(),
  datasilo: DataSiloSchema.optional().nullable(),
});

export type ChatDetailType = z.infer<typeof ChatDetailSchema>;