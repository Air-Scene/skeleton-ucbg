import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, InputField } from '@/components/atomic';
import { useAuth } from '../../../../hooks/useAuth';
import { passwordForgotSchema, type PasswordForgotFormType } from './schema';
import { useAppNavigation } from '@/hooks/useAppNavigation';

const PasswordForgotForm = () => {
  const { t } = useTranslation();
  const { forgotPassword, isForgotPasswordPending } = useAuth();
  const { navigateToLogin } = useAppNavigation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordForgotFormType>({
    resolver: zodResolver(passwordForgotSchema),
  });

  const onSubmit = (data: PasswordForgotFormType) => {
    forgotPassword.mutate(data);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <InputField
        id="email"
        type="email"
        label={t('auth.email.label')}
        placeholder={t('auth.email.placeholder')}
        error={errors.email?.message ? t(errors.email.message) : undefined}
        {...register('email')}
      />

      <div className="flex gap-4">
        <Button
          type="submit"
          loading={isForgotPasswordPending}
          className="w-full"
          label={t('auth.forgotPassword.sendResetLink')}
          icon="pi pi-envelope"
        />

        <Button
          type="button"
          severity="secondary"
          className="w-full"
          label={t('auth.backToLogin')}
          icon="pi pi-arrow-left"
          onClick={() => navigateToLogin()}
        />
      </div>
    </form>
  );
};

export default PasswordForgotForm;