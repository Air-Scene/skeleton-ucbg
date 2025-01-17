import { useTranslation } from 'react-i18next';
import { Card } from '@/components/atomic';
import { useUserProfile } from '../../hooks/useUserProfile';
import UpdateProfileForm from './components/forms/UpdateProfileForm';
import ChangePasswordForm from './components/forms/ChangePasswordForm';
import { ProgressSpinner } from 'primereact/progressspinner';
import ErrorBoundary from '@/components/boundaries/ErrorBoundary';

const ProfilePage = () => {
    const { t } = useTranslation();
    const { isLoading, profileError, accountError } = useUserProfile();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <ProgressSpinner />
            </div>
        );
    }

    if (profileError || accountError) {
        const error = profileError || accountError;
        throw error;
    }

    return (
        <div className="p-4 space-y-6">
            <ErrorBoundary>
                <Card className="max-w-2xl mx-auto">
                    <h1 className="text-2xl font-semibold mb-6">{t('profile.title')}</h1>
                    <UpdateProfileForm />
                </Card>
            </ErrorBoundary>

            <ErrorBoundary>
                <Card className="max-w-2xl mx-auto">
                    <h2 className="text-xl font-semibold mb-6">{t('profile.changePassword')}</h2>
                    <ChangePasswordForm />
                </Card>
            </ErrorBoundary>
        </div>
    );
};

export default ProfilePage; 