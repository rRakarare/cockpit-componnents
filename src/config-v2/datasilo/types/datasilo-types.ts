import { z } from "zod";
import { GroupSchema } from "../../group/types/group-types";
import { IconColors, IconSchema } from "../../icons/types/icon-types";
import { ChatSchema } from "@/config-v2/chat/types/chat-types";

export const DataSiloSchema = z.object({
  id: z.number(),
  data_silo_uuid: z.string().uuid(),
  user_id: z.number().nullable(),
  company_id: z.number().nullable(),
  collection_name: z.string().nullable(),
  cluster_url: z.string().nullable(),
  api_key: z.string().nullable(),
  display_name: z.string().nullable(),
  description: z.string().nullable(), // New property
  path: z.string().nullable(),
  system_message: z.string().nullable(),
  permissions: z.string().nullable(),
  image_cost: z.record(z.string(), z.number()).nullable(),
  created_at: z.date(),
  updated_at: z.date(),
  groups: z.array(GroupSchema),
  icon: IconSchema,
  color: IconColors,
  chats: z.array(ChatSchema),
});
export type DataSiloType = z.infer<typeof DataSiloSchema>;