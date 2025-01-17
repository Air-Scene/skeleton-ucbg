import { z } from "zod";
import { passwordResetSchema } from "../../pages/passwordReset/components/forms/schema";

export interface PasswordResetRequest {
    token: string;
    newPassword: string;
}

export type PasswordResetFormType = z.infer<typeof passwordResetSchema>;    