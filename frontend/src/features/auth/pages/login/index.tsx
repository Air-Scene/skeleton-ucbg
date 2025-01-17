import { useLocation, Link } from 'react-router-dom';
import LoginForm from './components/forms/LoginForm';
import { Card } from '@/components/atomic';
import { useTranslation } from 'react-i18next';

const Page = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const message = location.state?.text;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="p-8 w-full md:max-w-[600px]">
        <div className="text-center mb-6">
          <div className="mb-4">
            <img
              src="/cube-logo.svg"
              alt="Logo"
              className="w-12 h-12 mx-auto"
            />
          </div>
          <h1 className="text-gray-900 dark:text-white text-2xl font-semibold mb-2">
            {t('auth.welcomeBack')}
          </h1>
          <div className="text-gray-600 dark:text-gray-300 text-sm">
            {t('auth.account.noAccount')}{' '}
            <Link to="/register" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              {t('auth.account.createToday')}
            </Link>
          </div>
        </div>
        {message && (
          <div className="text-blue-600 mb-4">{message}</div>
        )}
        <LoginForm />
      </Card>

    </div>
  );
};

export default Page; 