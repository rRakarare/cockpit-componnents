import { z } from "zod";

export const ModelSchema = z.enum(["GPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro"]);

const MessageSchema = z.object({
  _id: z.string(),
  role: z.enum(["user", "assistant"]),
  content: z.string(), // Image URL 1
  contentTwo: z.string(), // Image URL 2
  createdContentAt: z.string(),
});

export const ImageChatZodSchema = z.object({
  _id: z.string(),
  user: z.string(),
  title: z.string(),
  model: ModelSchema,
  updatedAt: z.string(),
  createdAt: z.string(),
  messages: z.array(MessageSchema),
  type: z.literal('image-chat'),
});

export type ImageChatType = z.infer<typeof ImageChatZodSchema>;
