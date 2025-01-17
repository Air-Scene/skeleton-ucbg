
import PricingCard from "./PricingCard";
import { PricingPlan } from "../types/PricePlan";

const PRICING_PLANS: PricingPlan[] = [
    {
        name: "Basic",
        description: "Perfect for small projects",
        price: 9,
        features: [
            { name: "Arcu vitae elementum" },
            { name: "Dui faucibus in ornare" },
            { name: "Morbi tincidunt augue" }
        ]
    },
    {
        name: "Premium",
        description: "Great for growing businesses",
        price: 29,
        features: [
            { name: "Arcu vitae elementum" },
            { name: "Dui faucibus in ornare" },
            { name: "Morbi tincidunt augue" },
            { name: "Duis ultricies lacus sed" }
        ]
    },
    {
        name: "Enterprise",
        description: "For large scale operations",
        price: 49,
        features: [
            { name: "Arcu vitae elementum" },
            { name: "Dui faucibus in ornare" },
            { name: "Morbi tincidunt augue" },
            { name: "Duis ultricies lacus sed" },
            { name: "Imperdiet proin" },
            { name: "Nisi scelerisque" }
        ],
        isOutlined: true
    }
]; 

const PricingGrid = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
            {PRICING_PLANS.map((plan) => (
                <PricingCard
                    key={plan.name}
                    {...plan}
                />
            ))}
        </div>
    );
};

export default PricingGrid; 