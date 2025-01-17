import { z } from "zod";

export const passwordForgotSchema = z.object({
    email: z.string().email('auth.email.invalid'),
});

export type PasswordForgotFormType = z.infer<typeof passwordForgotSchema>;