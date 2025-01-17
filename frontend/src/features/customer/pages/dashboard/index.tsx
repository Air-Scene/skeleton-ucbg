import { Card } from '@/components/atomic';
import { useAuthStore } from '@/features/auth/stores/authStore';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Page = () => {
  const { t } = useTranslation();
  const { getAccount } = useAuthStore();
  const account = getAccount();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1>{t('dashboard.welcomeMessage', { name: account?.firstName })}</h1>
        <div className="flex gap-2">
          <LanguageSwitcher />
        </div>
      </div>

      <div className="grid">
        <div className="col-12 md:col-6 lg:col-3">
          <Card title={t('dashboard.totalUsers')} className="mb-3">
            <div className="text-center">
              <span className="text-4xl">{0}</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page; 