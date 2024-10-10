import { z } from "zod";

export const MessageSchema = z.object({
    _id: z.string(),
    role: z.enum(["user", "assistant"]),
    content: z.string(),
    contentTwo: z.string().optional(),
    createdContentAt: z.string(),
    type: z.string().optional(),
    metadata: z.object({}).optional(),
  });

  export type MessageType = z.infer<typeof MessageSchema>;