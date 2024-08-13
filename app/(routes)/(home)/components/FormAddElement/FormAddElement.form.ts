import { z } from "zod";

export const formSchema = z.object({
  typeElement: z.string().min(2).max(50),
  isFavourite: z.boolean().default(false),
  name: z.string().min(2).max(50),
  directory: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  urlWebsite: z.string().min(2).max(50),
  notes: z.string(),
  userId: z.string(),
});
