import { z } from 'zod';

export const passwordRules = z.string()
    .min(8, 'password.minLength')
    .regex(/[A-Z]/, 'password.needsUppercase')
    .regex(/[a-z]/, 'password.needsLowercase')
    .regex(/[0-9]/, 'password.needsNumber');


export type PasswordRulesType = z.infer<typeof passwordRules>;