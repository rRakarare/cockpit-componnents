import { z } from 'zod';

export const ContentSchema = z.object({
  id: z.bigint(),
  content_uuid: z.string().uuid(),
  io_type: z.enum(['input', 'output']),
  type: z.enum(['image', 'text', 'file']),
  project_id: z.bigint().nullable(),
  message_id: z.bigint().nullable(),
  prompt_id: z.bigint().nullable(),
  file_name: z.string().nullable(),
  document_type: z.string().nullable(),
  content: z.string().nullable(),
  size: z.bigint().nullable(),
  extracted_lines: z.number().int().nullable(),
  token_count: z.number().int().nullable(),
  summary: z.string().nullable(),
  uploaded_by: z.bigint().nullable(),
  url: z.string().nullable(),
  is_active: z.boolean().nullable(),
  content_hash: z.string().nullable(),
  last_accessed: z.date().nullable(),
});

export type ContentType = z.infer<typeof ContentSchema>;

// To query multiple items in List view

export const ContentSimpleSchema = ContentSchema.pick({
  content_uuid: true,
  type: true,
  file_name: true,
  document_type: true,
  size: true,
  uploaded_by: true,
  url: true,
});

export type ContentSimpleType = z.infer<typeof ContentSimpleSchema>;