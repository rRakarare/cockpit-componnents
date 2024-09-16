import { z } from "zod";

const ModelSchema = z.enum(["GPT-4o", "Claude 3.5 Sonnet", "GPT-4"]);

const MessageSchema = z.object({
  _id: z.string(),
  role: z.enum(["user", "assistant"]),
  content: z.string(),
  createdContentAt: z.string(),
  type: z.string(),
  metadata: z.object({}),
});

export const ChatZodSchema = z.object({
  _id: z.string(),
  user: z.string(),
  title: z.string(),
  assistantId: z.string().optional(),
  threadId: z.string().optional(),
  model: ModelSchema,
  urlGenerated: z.boolean(),
  updatedAt: z.string(),
  createdAt: z.string(),
  messages: z.array(MessageSchema),
  type: z.literal('chat'),
});

export type ChatType = z.infer<typeof ChatZodSchema>;
