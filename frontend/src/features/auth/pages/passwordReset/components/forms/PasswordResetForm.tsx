import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, PasswordInput } from '@/components/atomic';
import { useAuth } from '../../../../hooks/useAuth';
import { passwordResetSchema, type PasswordResetFormType } from './schema';
import { useAppNavigation } from '@/hooks/useAppNavigation';

interface PasswordResetFormProps {
  token: string;
}

const PasswordResetForm = ({ token }: PasswordResetFormProps) => {
  const { t } = useTranslation();
  const { resetPassword, isResettingPassword } = useAuth();
  const { navigateToLogin } = useAppNavigation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordResetFormType>({
    resolver: zodResolver(passwordResetSchema),
  });

  const onSubmit = (data: PasswordResetFormType) => {
    resetPassword.mutate({ token, newPassword: data.password });
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
       <PasswordInput
        id="password"
        label={t('password.label')}
        placeholder={t('password.placeholder')}
        error={errors.password?.message ? t(errors.password.message) : undefined}
        autocomplete="new-password"
        {...register('password')}
      />
      
      <PasswordInput
        id="passwordConfirm"
        label={t('password.confirm')}
        placeholder={t('password.confirmPlaceholder')}
        error={errors.passwordConfirm?.message ? t(errors.passwordConfirm.message) : undefined}
        autocomplete={undefined}
        {...register('passwordConfirm')}
      />

      <div className="flex gap-4">
        <Button
          type="submit"
          loading={isResettingPassword}
          className="w-full"
          label={t('auth.resetPassword.submit')}
          icon="pi pi-lock"
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

export default PasswordResetForm;