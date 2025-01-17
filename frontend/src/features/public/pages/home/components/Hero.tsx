import { Button } from '@/components/atomic';
import { useTranslation } from 'react-i18next';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { useAuthStore } from '@/features/auth/stores/authStore';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { t } = useTranslation();
    const { isAuthenticated, getRole } = useAuthStore();
    const { navigateByRole } = useAppNavigation();

    const handleDashboardClick = () => {
        if (isAuthenticated) {
            navigateByRole(getRole());
        }
    };

    return (
        <div className="flex w-full items-center surface-0 text-800">
            <div className="p-6 text-center md:text-left flex items-center">
                <section>
                    <span className="block text-4xl font-bold mb-1"> Welcome to Our Platform</span>
                    <div className="text-4xl text-primary font-bold mb-3">A secure and efficient way to manage your business operations</div>
                    <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    {isAuthenticated && (
                        <Button
                            label={t('home.goToDashboard')}
                            icon="pi pi-home"
                            onClick={handleDashboardClick}
                        />
                    )}
                    {!isAuthenticated && (
                        <div className="flex gap-6 flex-wrap justify-center md:justify-start">
                            <Link to="/register">
                                <Button
                                    label={t('auth.register')}
                                    icon="pi pi-user-plus"
                                />
                            </Link>
                            <Link to="/login">
                                <Button
                                    label={t('auth.signIn')}
                                    icon="pi pi-sign-in"
                                    outlined
                                />
                            </Link>
                        </div>
                    )}
                </section>
            </div>
            <div className="overflow-hidden hidden md:block">
                <img src="https://images.westend61.de/0001343615pw/serious-young-woman-standing-at-desk-in-office-looking-at-computer-JSRF00923.jpg" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
            </div>
        </div>
    );
};

export default Hero;

