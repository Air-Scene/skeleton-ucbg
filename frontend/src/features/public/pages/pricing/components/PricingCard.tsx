import { Button } from "@/components/atomic";
import { Link } from "react-router-dom";
import { PricingFeature } from "../types/PriceFeatures";


interface PricingCardProps {
   name: string;
    description: string;
    price: number;
    features: PricingFeature[];
    isOutlined?: boolean;
}

const PricingCard = ({ name, description, price, features, isOutlined = false }: PricingCardProps) => {
    const planPath = name.toLowerCase();
    
    return (
        <div className="p-4">
            <div className="shadow-lg rounded-lg p-6 h-full flex flex-col bg-white dark:bg-gray-800">
                <div className="font-medium text-xl mb-2">{name}</div>
                <div className="">{description}</div>
                <hr className="my-3 w-full border-t border-gray-200" />
                <div className="flex items-center">
                    <span className="font-bold text-2xl ">${price}</span>
                    <span className="ml-2 font-medium">per month</span>
                </div>
                <hr className="my-3 w-full border-t border-gray-200" />
                <ul className="space-y-3 flex-grow">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>{feature.name}</span>
                        </li>
                    ))}
                </ul>
                <hr className="my-3 w-full border-t border-gray-200" />
                <Link
                    to={`/subscribe/${planPath}`}
                    className="w-full mt-auto"
                >
                    <Button
                        label="Buy Now"
                        className={`w-full ${isOutlined ? 'border border-primary hover:bg-primary/10' : ''}`}
                    />
                </Link>
            </div>
        </div>
    );
};

export default PricingCard; 