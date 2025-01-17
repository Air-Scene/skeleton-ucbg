import PricingGrid from "./components/PricingGrid";

const Page = () => {
    return (
        <div className="pt-10">
            <div className="font-bold text-5xl md:text-6xl mb-4 text-center">Pricing Plans</div>
            <div className="text-lg md:text-xl mb-6 text-center leading-relaxed">
                Choose the perfect plan for your needs
            </div>
            <PricingGrid />
        </div>
    );
};

export default Page;