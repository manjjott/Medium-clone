import { z } from "zod";

export const signUpInput = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  password: z.string().min(8),
});

export type SignUpInput = z.infer<typeof signUpInput>;

export const signInInput = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignInInput = z.infer<typeof signInInput>;

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export type CreateBlogInput = z.infer<typeof createBlogInput>;

export const updateBlogInput = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
});

export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
