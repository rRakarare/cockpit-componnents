import { z } from "zod";

export const contentSchema = z.object({
    id: z.number(),
    content_uuid: z.string().uuid(),
    project_id: z.number().nullable(),
    message_id: z.number().nullable(),
    prompt_id: z.number().nullable(),
    file_name: z.string().nullable(),
    document_type: z.string().nullable(),
    content: z.string().nullable(),
    size: z.number().nullable(),
    extracted_lines: z.number().nullable(),
    token_count: z.number().nullable(),
    summary: z.string().nullable(),
    uploaded_by: z.number().nullable(),
    is_active: z.boolean().nullable(),
    metadata: z.record(z.unknown()).nullable(),
    content_hash: z.string().nullable(),
    last_accessed: z.date().nullable(),
  });

export type ContentType = z.infer<typeof contentSchema>;