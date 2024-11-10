import { z } from "zod";

// Database Model Definition

export const UserSchema = z.object({
  id: z.bigint(),
  user_uuid: z.string().uuid(),
  mongo_uuid: z.string().nullable(),
  name: z.string().nullable(),
  email: z.string().email(),
  password_hash: z.string(),
  company_id: z.bigint(),
  status: z.enum(['active', 'disabled']),
  user_instruction: z.string().nullable(),
  role: z.enum(['user', 'editor', 'admin', 'superadmin']),
  image_url: z.string().nullable(),
});

export type UserType = z.infer<typeof UserSchema>;

// To query multiple items in List view

export const UserSimpleSchema = UserSchema.pick({
  user_uuid: true,
  name: true,
  email: true,
  image_url: true,
});

export type UserSimpleType = z.infer<typeof UserSimpleSchema>;