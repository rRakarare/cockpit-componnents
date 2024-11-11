import { z } from 'zod';
import { iconColorSchema, iconNameSchema } from '../icons';
import { ChatSimpleSchema } from './chat';
import { GroupSchema } from './group';
import { UserSimpleSchema } from './user';


export const DataSiloSchema = z.object({
  id: z.bigint(),
  data_silo_uuid: z.string().uuid(),
  owner_id: z.bigint(),
  collection_name: z.string().nullable(),
  description: z.string().nullable(),
  cluster_url: z.string().nullable(),
  api_key: z.string().nullable(),
  display_name: z.string().nullable(),
  icon: iconNameSchema,
  color: iconColorSchema,
  path: z.string().nullable(),
  system_message: z.string().nullable(),
  access_type: z.enum(['shared', 'company', 'private']).default('private'),
  company_id: z.bigint().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type DataSiloType = z.infer<typeof DataSiloSchema>;

// To query multiple items in List view

export const DataSiloSimpleSchema = DataSiloSchema.pick({
  data_silo_uuid: true,
  owner_id: true,
  collection_name: true,
  description: true,
  cluster_url: true,
  display_name: true,
  updated_at: true,
  icon: true,
  color: true,
}).extend({
  chatCount: z.number().int(),
});

export type DataSiloSimpleType = z.infer<typeof DataSiloSimpleSchema>;

// To query a single item in Detail view

export const DataSiloDetailSchema = DataSiloSchema.extend({
  chats: z.array(ChatSimpleSchema),
  chatCount: z.number().int(), // Only for dummy data reason here, we can count chats
  groups: z.array(GroupSchema),
  users: z.array(UserSimpleSchema),
});

export type DataSiloDetailType = z.infer<typeof DataSiloDetailSchema>;