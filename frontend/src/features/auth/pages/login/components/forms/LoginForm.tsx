import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { Button, InputField, PasswordInput } from '@/components/atomic';
import { useAuth } from '../../../../hooks/useAuth';
import { loginSchema, type LoginFormType } from './schema';

const LoginForm = () => {
  const { t } = useTranslation();
  const { login, isLoggingIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data: LoginFormType) => {
    login.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        id="email"
        type="email"
        label={t('auth.email.label')}
        placeholder={t('auth.email.placeholder')}
        error={errors.email?.message ? t(errors.email.message) : undefined}
        {...register('email')}
      />

      <PasswordInput
        id="password"
        label={t('password.label')}
        placeholder={t('password.placeholder')}
        autocomplete="current-password"
        error={errors.password?.message ? t(errors.password.message) : undefined}
        {...register('password')}
      />

      <div className="flex items-center">
        <a href="/forgot-password" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
          {t('auth.forgotPassword.label')}
        </a>
      </div>

      <Button
        type="submit"
        loading={isLoggingIn}
        className="w-full"
        label={t('auth.signIn')}
        icon="pi pi-user"
      />
    </form>
  );
};

export default LoginForm;
