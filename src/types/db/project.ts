import { z } from 'zod';
import { iconColorSchema, iconNameSchema } from '../icons';
import { ChatSimpleSchema } from './chat';
import { GroupSchema } from './group';
import { UserSimpleSchema } from './user';
import { ContentSimpleSchema } from './content';

export const ProjectSchema = z.object({
  id: z.bigint(),
  project_uuid: z.string().uuid(),
  name: z.string(),
  description: z.string().nullable(),
  owner_id: z.bigint(),
  ai_model_id: z.bigint().nullable(),
  current_knowledge_usage: z.number().int().nullable(),
  icon: iconNameSchema,
  color: iconColorSchema,
  custom_instruction: z.string().nullable(),
  access_type: z.enum(['shared', 'private']).default('private'),
  created_at: z.date(),
  updated_at: z.date(),
});

export type ProjectType = z.infer<typeof ProjectSchema>;

// To query multiple items in List view

export const ProjectSimpleSchema = ProjectSchema.pick({
  project_uuid: true,
  name: true,
  description: true,
  owner_id: true,
  ai_model_id: true,
  current_knowledge_usage: true,
  icon: true,
  color: true,
  custom_instruction: true,
  access_type: true,
  created_at: true,
  updated_at: true,
}).extend({
  chatCount: z.number().int(),
})

export type ProjectSimpleType = z.infer<typeof ProjectSimpleSchema>;

// To query a single item in Detail view

export const ProjectDetailSchema = ProjectSchema.extend({
  chats: z.array(ChatSimpleSchema),
  chatCount: z.number().int(), // Only for dummy data reason here, we can count chats
  groups: z.array(GroupSchema),
  users: z.array(UserSimpleSchema.extend({
    projectRole: z.enum(['owner', 'member']),
  })),
  contents: z.array(ContentSimpleSchema.extend({type: z.literal('text')})),
});

export type ProjectDetailType = z.infer<typeof ProjectDetailSchema>;