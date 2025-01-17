export interface CustomerProfile {
  id: string;
  companyName: string | null;
  industry: string | null;
  phoneNumber: string | null;
  address: string | null;
  city: string | null;
  country: string | null;
  postalCode: string | null;
  vatNumber: string | null;
  subscriptionTier: string | null;
  subscriptionStartDate: string | null;
  subscriptionEndDate: string | null;
  lastPurchaseDate: string | null;
  totalPurchases: number;
  createdAt: string;
  updatedAt: string;
} 