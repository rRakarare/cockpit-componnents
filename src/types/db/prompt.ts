import { z } from 'zod';
import { iconColorSchema, iconNameSchema } from '../icons';
import { ChatSimpleSchema } from './chat';
import { GroupSchema } from './group';
import { UserSimpleSchema } from './user';


// Database Model Definition

export const PromptSchema = z.object({
  id: z.bigint(),
  prompt_uuid: z.string().uuid(),
  owner_id: z.bigint(),
  mongo_uuid: z.string().nullable(),
  name: z.string(),
  description: z.string(),
  icon: iconNameSchema,
  color: iconColorSchema,
  prompt_content: z.string(),
  ai_model_id: z.bigint(),
  current_knowledge_usage: z.number().int(),
  data_silo_id: z.string().uuid().nullable(),
  project_id: z.string().uuid().nullable(),
  access_type: z.enum(['shared', 'company', 'private', 'public']),
  company_id: z.bigint(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type PromptType = z.infer<typeof PromptSchema>;

// To query multiple items in List view

export const PromptSimpleSchema = PromptSchema.pick({
  id: true,
  prompt_uuid: true,
  owner_id: true,
  name: true,
  description: true,
  icon: true,
  color: true,
  data_silo_id: true,
  project_id: true,
  company_id: true,
  created_at: true,
  updated_at: true,
}).extend({
  chatCount: z.number().int(),
})

export type PromptSimpleType = z.infer<typeof PromptSimpleSchema>;

// To query a single item in Detail view

export const PromptDetailSchema = PromptSchema.extend({
  chats: z.array(ChatSimpleSchema),
  chatCount: z.number().int(), // Only for dummy data reason here, we can count chats
  groups: z.array(GroupSchema),
  users: z.array(UserSimpleSchema),
});

export type PromptDetailType = z.infer<typeof PromptDetailSchema>;