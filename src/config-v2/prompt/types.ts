import { z } from "zod";

const PromptIconSchema = z.enum([
  "mail",
  "at-sign",
  "phone",
  "message",
  "user",
  "users",
  "home",
  "briefcase",
  "calendar",
  "clock",
  "map-pin",
  "map",
  "compass",
  "edit",
]);

export type PromptIconType = z.infer<typeof PromptIconSchema>;

const PromptColors = z.enum([
  "hsl(var(--prompt-1))",
  "hsl(var(--prompt-2))",
  "hsl(var(--prompt-3))",
  "hsl(var(--prompt-4))",
  "hsl(var(--prompt-5))",
]);

const SubCategorySchema = z.object({
  _id: z.string(),
  name: z.string(),
});

const CategorySchema = z.object({
  _id: z.string(),
  name: z.string(),
});

const CompanySchema = z.object({
  _id: z.string(),
  name: z.string(),
  address: z.string(),
  systemMessage: z.string(),
});

export const PromptSchema = z.object({
  _id: z.string(),
  name: z.string(),
  category: CategorySchema,
  subCategory: SubCategorySchema,
  icon: PromptIconSchema,
  color: PromptColors,
  prompt: z.string(),
  description: z.string(),
  model: z.string(),
  type: z.enum(["prompt", "charakter"]),
  user: z.object({
    _id: z.string(),
    name: z.string(),
  }),
  company: CompanySchema,
  library: z.enum(["master", "company", "private"]),
  path: z.string(),
});

export type PromptType = z.infer<typeof PromptSchema>;
