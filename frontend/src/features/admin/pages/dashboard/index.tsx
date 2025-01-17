import { useTranslation } from 'react-i18next';
import { useAuthStore } from '@/features/auth/stores/authStore';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { Card } from '@/components/atomic';
import { useDashboardStats } from '../../hooks/useDashboardStats';

const Page = () => {
  const { t } = useTranslation();
  const account = useAuthStore((state) => state.account);
  const { userCount, customerCount, isLoading } = useDashboardStats();

  if (isLoading) {
    return <div>{t('common.loading')}</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between align-items-center mb-4">
        <h1 className="m-0">{t('dashboard.welcomeMessage', { name: account?.firstName })}</h1>
        <div className="flex gap-2">
          <LanguageSwitcher />
        </div>
      </div>

      <div className="grid">
        <div className="col-12 md:col-6 lg:col-3">
          <Card title={t('dashboard.totalUsers')} className="mb-3">
            <div className="text-center">
              <span className="text-4xl">{userCount}</span>
            </div>
          </Card>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <Card title={t('dashboard.totalCustomers')} className="mb-3">
            <div className="text-center">
              <span className="text-4xl">{customerCount}</span>
            </div>
          </Card>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <Card title={t('dashboard.totalPosts')} className="mb-3">
            <div className="text-center">
              <span className="text-4xl">0</span>
            </div>
          </Card>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <Card title={t('dashboard.newUsers')} className="mb-3">
            <div className="text-center">
              <span className="text-4xl">0</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page; 