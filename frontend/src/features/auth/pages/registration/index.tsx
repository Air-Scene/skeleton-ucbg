import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/atomic';
import RegistrationForm from './components/forms/RegistrationForm';

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="p-8 w-full md:max-w-[600px]">
        <div className="text-center mb-6">
          <div className="mb-4">
            <img
              src="/cube-logo.svg"
              alt="Logo"
              className="w-12 h-12 mx-auto"
            />
          </div>
          <h1 className="text-2xl font-semibold mb-2">
            {t('auth.account.create')}
          </h1>
          <div className="text-sm">
            {t('auth.account.alreadyHave')}{' '}
            <Link to="/login" className="hover:underline">
              {t('auth.signIn')}
            </Link>
          </div>
        </div>
        <RegistrationForm />
      </Card>
    </div>
  );
};

export default Page; 