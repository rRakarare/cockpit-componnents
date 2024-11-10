import { z } from "zod";

export const iconNameSchema = z.enum([
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
  
  export type IconNameType = z.infer<typeof iconNameSchema>;
  
  export const iconColorSchema = z.enum([
    "hsl(var(--icon-1))",
    "hsl(var(--icon-2))",
    "hsl(var(--icon-3))",
    "hsl(var(--icon-4))",
    "hsl(var(--icon-5))",
  ]);

  export type IconColorType = z.infer<typeof iconColorSchema>;