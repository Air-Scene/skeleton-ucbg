import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, InputField, Dropdown } from '@/components/atomic';
import { useUserProfile } from '../../../../hooks/useUserProfile';
import { useMessage } from '@/hooks/useMessage';
import { profileSchema, type ProfileFormData } from './schema';
import type { ErrorResponse, Language } from '@/types';
import { AxiosError } from 'axios';

const UpdateProfileForm = () => {
  const { t, i18n } = useTranslation();
  const { profile, account, updateUser, isUpdating } = useUserProfile();  
  const { showSuccess, showError } = useMessage();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    values: {
      firstName: account?.firstName || '',
      lastName: account?.lastName || '',
      language: (account?.language || 'en') as Language,
      bio: profile?.bio || '',
      phoneNumber: profile?.phoneNumber || '',
      address: profile?.address || '',
      city: profile?.city || '',
      country: profile?.country || '',
      postalCode: profile?.postalCode || ''
    }
  });

  const languageOptions: Array<{ label: string; value: Language }> = [
    { label: t('language.en'), value: 'en' },
    { label: t('language.de'), value: 'de' },
    { label: t('language.tr'), value: 'tr' },
  ];

  const onSubmit = (data: ProfileFormData) => {
    updateUser(data, {
      onSuccess: () => {
        showSuccess(t('profile.updateSuccess'));
        i18n.changeLanguage(data.language);
      },
      onError: (error: AxiosError<ErrorResponse>) => {
        showError(error.response?.data.message || error.message);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label={t('common.firstName')}
          error={errors.firstName?.message}
          {...register('firstName')}
        />

        <InputField
          label={t('common.lastName')}
          error={errors.lastName?.message}
          {...register('lastName')}
        />
      </div>

      <div>
        <span className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
          {t('language.label')}
        </span>
        <Dropdown
          options={languageOptions}
          value={watch('language')}
          onChange={(e) => setValue('language', e.value as Language)}
          className="w-full"
        />
      </div>

      <InputField
        label={t('profile.bio')}
        error={errors.bio?.message}
        {...register('bio')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label={t('profile.phoneNumber')}
          error={errors.phoneNumber?.message}
          {...register('phoneNumber')}
        />

        <InputField
          label={t('profile.address')}
          error={errors.address?.message}
          {...register('address')}
        />

        <InputField
          label={t('profile.city')}
          error={errors.city?.message}
          {...register('city')}
        />

        <InputField
          label={t('profile.country')}
          error={errors.country?.message}
          {...register('country')}
        />

        <InputField
          label={t('profile.postalCode')}
          error={errors.postalCode?.message}
          {...register('postalCode')}
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          loading={isUpdating}
          label={t('common.save')}
        />
      </div>
    </form>
  );
};

export default UpdateProfileForm;