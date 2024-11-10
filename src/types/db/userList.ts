import { z } from 'zod';

export const UserListSchema = z.object({
  id: z.bigint(),
  list_uuid: z.string().uuid(),
  user_id: z.bigint(),
  name: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
