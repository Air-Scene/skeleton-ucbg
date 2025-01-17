import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/atomic';
import { PasswordInput } from '@/components/atomic';
import { useUserProfile } from '../../../../hooks/useUserProfile';
import { useMessage } from '@/hooks/useMessage';
import { passwordSchema, type PasswordFormData } from './schema';
import type { AxiosError } from 'axios';
import type { ErrorResponse } from '@/types';

const ChangePasswordForm = () => {
    const { t } = useTranslation();
    const { changePassword, isChangingPassword } = useUserProfile();
    const { showSuccess, showError } = useMessage();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<PasswordFormData>({
        resolver: zodResolver(passwordSchema)
    });

    const onSubmit = (data: PasswordFormData) => {
        changePassword(
            {
                currentPassword: data.currentPassword,
                newPassword: data.newPassword
            },
            {
                onSuccess: () => {
                    showSuccess(t('profile.passwordUpdateSuccess'));
                    reset();
                },
                onError: (error: AxiosError<ErrorResponse>) => {
                    showError(error.response?.data.message || error.message);
                }
            }
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <PasswordInput
                id="currentPassword"
                label={t('password.current')}
                error={errors.currentPassword?.message}
                autoComplete="current-password"
                {...register('currentPassword')}
            />
            
            <PasswordInput
                id="newPassword"
                label={t('password.new')}
                error={errors.newPassword?.message}
                autoComplete="new-password"
                {...register('newPassword')}
            />
            
            <PasswordInput
                id="passwordConfirm"
                label={t('password.confirm')}
                error={errors.passwordConfirm?.message}
                autoComplete="new-password"
                {...register('passwordConfirm')}
            />

            <div className="flex justify-end">
                <Button
                    type="submit"
                    loading={isChangingPassword}
                    label={t('password.update')}
                />
            </div>
        </form>
    );
};

export default ChangePasswordForm;