import { z } from "zod"

export const PromptSchema = z.object({
    title: z.string(),
    type: z.string(),
    description: z.string(),
})

export type PromptType = z.infer<typeof PromptSchema>

