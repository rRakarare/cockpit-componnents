import { z } from "zod";

const ModelSchema = z.enum(["GPT-4o", "Claude 3.5 Sonnet", "GPT-4"]);

const MessageSchema = z.object({
  content: z.string(),
  createdContentAtt: z.string(),
  role: z.enum(["user", "assistant"]),
  _id: z.string(),
});

export const ChatSchema = z.object({
  _id: z.number(),
  model: ModelSchema,
  title: z.string(),
  updatedAt: z.string(),
  user: z.string(),
  messages: z.array(MessageSchema),
});

export type ChatType = z.infer<typeof ChatSchema>;
