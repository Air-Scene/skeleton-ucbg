import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import { useAuthStore } from '@/features/auth/stores/authStore';
import { useAppNavigation } from '@/hooks/useAppNavigation';

const NotFound = () => {
  const { t } = useTranslation();
  const { getRole } = useAuthStore();
  const { navigateByRole } = useAppNavigation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4">
          {t('common.notFound')}
        </h2>
        <p className="mb-8 max-w-md">
          {t('common.notFoundDescription')}
        </p>
        <Button
          label={t('common.goBack')}
          icon="pi pi-arrow-left"
          onClick={() => navigateByRole(getRole())}
          className="bg-[#4F46E5] hover:bg-[#4338CA]"
        />
      </div>
    </div>
  );
};

export default NotFound; 