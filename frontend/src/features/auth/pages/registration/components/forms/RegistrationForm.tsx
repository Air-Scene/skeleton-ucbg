import { useForm, UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { Button, InputField, Dropdown, PasswordInput } from '@/components/atomic';
import { useAuth } from '../../../../hooks/useAuth';
import { Language, Role } from '@/types';
import { registerSchema, type RegisterFormType } from './schema';
import { TFunction } from 'i18next';

interface SectionProps {
  register: UseFormRegister<RegisterFormType>;
  errors: FieldErrors<RegisterFormType>;
  t: TFunction;
}

interface PreferencesSectionProps {
  setValue: UseFormSetValue<RegisterFormType>;
  watch: (name: keyof RegisterFormType) => any;
  t: TFunction;
}

const CredentialsSection = ({ register, errors, t }: SectionProps) => (
  <>
    <InputField
      id="email"
      type="email"
      label={t('auth.email.label')}
      placeholder={t('auth.email.placeholder')}
      error={errors.email?.message ? t(errors.email.message) : undefined}
      {...register('email')}
      required
    />
  </>
);

const PasswordSection = ({ register, errors, t }: SectionProps) => (
  <>
    <PasswordInput
      id="password"
      label={t('password.label')}
      placeholder={t('password.placeholder')}
      error={errors.password?.message ? t(errors.password.message) : undefined}
      autocomplete="new-password"
      {...register('password')}
      required
    />
    <PasswordInput
      id="passwordConfirm"
      label={t('password.confirm')}
      placeholder={t('password.confirmPlaceholder')}
      error={errors.passwordConfirm?.message ? t(errors.passwordConfirm.message) : undefined}
      autocomplete={undefined}
      {...register('passwordConfirm')}
      required
    />
  </>
);

const PreferencesSection = ({ setValue, watch, t }: PreferencesSectionProps) => {
  const languageOptions: Array<{ label: string; value: Language }> = [
    { label: t('language.en'), value: 'en' },
    { label: t('language.de'), value: 'de' },
    { label: t('language.tr'), value: 'tr' },
  ];

  const roleOptions: Array<{ label: string; value: Role }> = [
    { label: t('role.user'), value: 'ROLE_USER' },
    { label: t('role.customer'), value: 'ROLE_CUSTOMER' },
  ];

  const selectedLanguage = watch('language');
  const selectedRole = watch('role');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <span className="block text-900 font-medium mb-2">{t('language.selectLanguage')}</span>
        <Dropdown
          options={languageOptions}
          value={selectedLanguage}
          onChange={(e) => setValue('language', e.value)}
          placeholder={t('language.selectLanguage')}
          className="w-full"
        />
      </div>
      <div>
        <span className="block text-900 font-medium mb-2">{t('role.label')}</span>
        <Dropdown
          options={roleOptions}
          value={selectedRole}
          onChange={(e) => setValue('role', e.value)}
          placeholder={t('role.selectRole')}
          className="w-full"
        />
      </div>
    </div>
  );
};

const RegistrationForm = () => {
  const { t } = useTranslation();
  const { register: registerMutation, isRegistering } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      language: 'de',
      role: 'ROLE_USER',
    },
  });

  const onSubmit = (data: RegisterFormType) => {
    const { passwordConfirm, ...registerData } = data;
    registerMutation.mutate(registerData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <CredentialsSection register={register} errors={errors} t={t} />
      <PasswordSection register={register} errors={errors} t={t} />
      <PreferencesSection setValue={setValue} watch={watch} t={t} />

      <Button
        type="submit"
        loading={isRegistering}
        className="w-full"
        label={t('auth.register')}
        icon="pi pi-user-plus"
      />
    </form>
  );
};

export default RegistrationForm;