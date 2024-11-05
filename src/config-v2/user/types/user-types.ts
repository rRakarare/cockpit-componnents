import { z } from "zod";

export const userSchema = z.object({
    id: z.number(),
    user_uuid: z.string().uuid(),
    mongo_uuid: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().email(),
    password_hash: z.string(),
    company_id: z.number().nullable(),
    admin_balance: z.number().default(0),
    status: z.enum(['active', 'disabled']),
    image_url: z.string().nullable(),
    metadata: z.record(z.unknown()).nullable(),
  });

export type UserType = z.infer<typeof userSchema>;