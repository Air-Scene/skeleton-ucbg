import { useTranslation } from 'react-i18next';
import ForgotPasswordForm from './components/forms/PasswordForgotForm';
import { useLanguageFromUrl } from '@/features/auth/hooks/useLanguageFromUrl';
import { Card } from '@/components/atomic';

const Page = () => {
  const { t } = useTranslation();
  useLanguageFromUrl();

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            {t('auth.forgotPassword.label')}
          </h2>
          <p className="mt-2 text-center text-sm">
            {t('auth.forgotPassword.description')}
          </p>
        </div>

        <ForgotPasswordForm />
      </Card>
    </div>
  );
};

export default Page;  