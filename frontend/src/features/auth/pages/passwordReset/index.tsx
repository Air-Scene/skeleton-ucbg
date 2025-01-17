import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Card, Message } from '@/components/atomic';
import ResetPasswordForm from './components/forms/PasswordResetForm';  
import { useLanguageFromUrl } from '@/features/auth/hooks/useLanguageFromUrl';

const Page = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  useLanguageFromUrl();

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Message
          severity="error"
          text={t('auth.invalidResetToken')}
          className="w-full max-w-md"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            {t('auth.resetPassword.label')}
          </h2>
          <p className="mt-2 text-center text-sm">
            {t('auth.resetPassword.description')}
          </p>
        </div>

        <ResetPasswordForm token={token} />
      </Card>
    </div>
  );
};

export default Page; 