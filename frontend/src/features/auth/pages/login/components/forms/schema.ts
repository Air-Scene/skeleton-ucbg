import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email('auth.email.invalid'),
    password: z.string().min(6, 'password.minLength'),
    rememberMe: z.boolean().optional(),
  });
  
export type LoginFormType = z.infer<typeof loginSchema>;