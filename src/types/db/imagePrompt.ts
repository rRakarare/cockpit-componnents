import { z } from 'zod';
import { ImageMessageSchema } from './imageMessage';

export const ImagePromptSchema = z.object({
  id: z.bigint(),
  image_uuid: z.string().uuid(),
  mongo_uuid: z.string().nullable(),
  user_id: z.bigint(),
  title: z.string().nullable(),
  input_prompt: z.string().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type ImagePromptType = z.infer<typeof ImagePromptSchema>;

  // To query items

export const ImagePromptDetailSchema = ImagePromptSchema.extend({
  images: z.array(ImageMessageSchema),
});

export type ImagePromptDetailType = z.infer<typeof ImagePromptDetailSchema>;