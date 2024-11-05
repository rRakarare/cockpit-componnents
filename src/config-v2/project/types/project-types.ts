import { ChatSchema } from "@/config-v2/chat/types/chat-types";
import { contentSchema } from "@/config-v2/content/types/content-types";
import { IconColors, IconSchema } from "@/config-v2/icons/types/icon-types";
import { userSchema } from "@/config-v2/user/types/user-types";
import { z } from "zod";

export const projectSchema = z.object({
    id: z.number(),
    project_uuid: z.string().uuid(),
    name: z.string(),
    description: z.string().nullable(),
    owner_id: z.number(),
    project_type: z.string().nullable(),
    llm_id: z.number().nullable(),
    max_knowledge_size: z.number().nullable(),
    current_knowledge_usage: z.number().nullable(),
    knowledge_usage_percentage: z.number().nullable(),
    icon: IconSchema,
    color: IconColors,
    custom_instruction: z.string().nullable(),
    permissions: z.record(z.unknown()).nullable(),
    contents: z.array(contentSchema),
    users: z.array(userSchema),
    chats: z.array(ChatSchema),
  });