import { Account, Role } from '@/types';

export interface AuthResponse {
  accessToken: string;
  account: Account;
  authority: Role;
}
  