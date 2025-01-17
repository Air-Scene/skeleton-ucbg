import { Language } from "@/types";
import { Role } from "@/types";

export interface RegistrationRequest {
    email: string;
    password: string;
    language: Language;
    role: Exclude<Role, 'ROLE_ADMIN'>;
}