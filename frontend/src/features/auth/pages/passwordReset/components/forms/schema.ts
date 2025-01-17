import { z } from 'zod';
import { passwordRules } from '@/utils/validation/passwordRules';

export const passwordResetSchema = z.object({
    password: passwordRules,
    passwordConfirm: z.string()
  }).refine((data) => data.password === data.passwordConfirm, {
    message: "password.dontMatch",
    path: ["passwordConfirm"],
  });
  
  export type PasswordResetFormType = z.infer<typeof passwordResetSchema>;