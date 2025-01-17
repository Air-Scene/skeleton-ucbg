import { z } from 'zod';
import { Language, Role } from '@/types';
import { passwordRules } from '@/utils/validation/passwordRules';

export const registerSchema = z.object({
  email: z.string().email('auth.email.invalid'),
  password: passwordRules,
  passwordConfirm: z.string(),
  language: z.enum(['en', 'de', 'tr'] as const satisfies readonly Language[]).default('de'),
  role: z.enum(['ROLE_USER', 'ROLE_CUSTOMER'] as const satisfies readonly Role[]).default('ROLE_USER'),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "password.dontMatch",
  path: ["passwordConfirm"],
});

export type RegisterFormType = z.infer<typeof registerSchema>; 