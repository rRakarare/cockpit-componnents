import { z } from "zod";
import { MessageSchema } from "./message";

const ModelSchema = z.enum(["GPT-4o", "Claude 3.5 Sonnet", "GPT-4"]);


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
