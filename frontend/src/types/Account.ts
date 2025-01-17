import { AccountStatus } from './AccountStatus';
import { Language } from './Language';
import { Role } from './Role';

export interface Account {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  language: Language;
  status: AccountStatus;
  createdAt: string;
  updatedAt: string;
}