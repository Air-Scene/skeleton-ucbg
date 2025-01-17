export interface AdminProfile {
  id: string;
  department: string | null;
  position: string | null;
  adminLevel: number;
  directReportsCount: number;
  lastAccessDate: string | null;
  createdAt: string;
  updatedAt: string;
} 