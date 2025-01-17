import { z } from 'zod';

export const profileSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  language: z.enum(['en', 'de', 'tr'] as const),
  bio: z.string().optional(),
  phoneNumber: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  postalCode: z.string().optional(),
  lastLoginDate: z.string().optional(),
});

export const passwordSchema = z.object({
  currentPassword: z.string()
    .min(6, 'Current password must be at least 6 characters'),
  newPassword: z.string()
    .min(6, 'New password must be at least 6 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  passwordConfirm: z.string()
}).refine((data) => data.newPassword === data.passwordConfirm, {
  message: "Passwords don't match",
  path: ['passwordConfirm']
});

export type ProfileFormData = z.infer<typeof profileSchema>;
export type PasswordFormData = z.infer<typeof passwordSchema>; 