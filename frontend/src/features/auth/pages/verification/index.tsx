import { useAppNavigation } from '@/hooks/useAppNavigation';
import { useTranslation } from 'react-i18next';
import { Button, Card, Message } from '@/components/atomic';
import { useLanguageFromUrl } from '@/features/auth/hooks/useLanguageFromUrl';

interface VerificationPageProps {
    isSuccess: boolean;
}

const Page = ({ isSuccess }: VerificationPageProps) => {
    const { t } = useTranslation();
    const { navigateToLogin, navigateToRegister } = useAppNavigation();
    useLanguageFromUrl();

    const VerificationSuccess = () => {
        return (
            <>
                <i className="pi pi-check-circle text-5xl mb-4"></i>
                <h1 className="text-2xl font-bold mb-2">
                    {t('auth.verification.success')}
                </h1>
                <p className="mb-6">
                    {t('auth.verification.description')}
                </p>
                <Button
                    className="w-full"
                    onClick={() => navigateToLogin()}
                    label={t('auth.verification.proceedToLogin')}
                    icon="pi pi-sign-in"
                />
            </>
        )
    };

    const VerificationError = () => {
        return (
            <>
                <i className="pi pi-times-circle text-red-500 dark:text-red-400 text-5xl mb-4"></i>
                <h1 className="text-2xl font-bold mb-2 text-red-500 dark:text-red-400">
                    {t('auth.verification.failed')}
                </h1>
                <Message
                    severity="error"
                    text={t('auth.verification.failed')}
                    className="w-full mb-6"
                />
                <Button
                    className="w-full"
                    onClick={() => navigateToRegister()}
                    label={t('auth.register')}
                    icon="pi pi-sign-in"
                />
            </>
        )
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card className="p-8 rounded-lg shadow-md text-center max-w-md w-full">
                {isSuccess ? VerificationSuccess() : VerificationError()}
            </Card>
        </div>
    );
};

export default Page; 