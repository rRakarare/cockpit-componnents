import { z } from 'zod';

export const ImageMessageSchema = z.object({
  id: z.bigint(),
  imageMessageUUID: z.string().uuid(),
  aiModelId: z.bigint(),
  url: z.string(),  
});

export type ImageMessageType = z.infer<typeof ImageMessageSchema>;