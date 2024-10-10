import { z } from "zod";
import { MessageSchema } from "./message";

const ModelSchema = z.enum(["GPT-4o", "Claude 3.5 Sonnet", "GPT-4"]);



export const ChatZodSchema = z.object({
  _id: z.string(),
  user: z.string(),
  title: z.string(),
  assistantId: z.string().optional(),
  threadId: z.string().optional(),
  model: ModelSchema,
  urlGenerated: z.boolean().optional(),
  updatedAt: z.string(),
  createdAt: z.string(),
  messages: z.array(MessageSchema),
  type: z.literal('chat'),
});

export type ChatType = z.infer<typeof ChatZodSchema>;
