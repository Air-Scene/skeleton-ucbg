import { PricingFeature } from "./PriceFeatures";

export interface PricingPlan {
    name: string;
    description: string;
    price: number;
    features: PricingFeature[];
    isOutlined?: boolean;
} 