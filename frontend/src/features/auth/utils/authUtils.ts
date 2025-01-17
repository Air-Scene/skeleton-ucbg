import { Role } from '@/types';

export const extractRoles = (authorities: string[]): Role[] => {
  return authorities
    .filter(auth => auth.startsWith('ROLE_'))
    .filter(auth => auth === 'ROLE_ADMIN' || auth === 'ROLE_USER') as Role[];
};

export const getRoleValue = (role: Role): string => {
  return role.replace('ROLE_', '').toLowerCase();
}; 