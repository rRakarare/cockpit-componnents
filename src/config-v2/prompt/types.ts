import { z } from "zod";
import { IconColors, IconSchema } from "../icons/types/icon-types";



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
  icon: IconSchema,
  color: IconColors,
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
