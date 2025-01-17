import { ErrorResponse } from '@/types';
import { useMessageStore } from '@/stores/messageStore';
import { AxiosError } from 'axios';


export const useMessage = () => {
  const { showToast } = useMessageStore();

  const showError = (error: AxiosError<ErrorResponse> | string) => {
    if (typeof error === 'string') {
      showToast({ text: error, type: 'error' });
    } else {
      // Use backend message if available, fallback to translation key
      const message = error.response?.data?.message || 'errors.serverError';
      showToast({ text: message, type: 'error' });
    }
  };

  const showSuccess = (message: string) => {
    showToast({ text: message, type: 'success' });
  };

  const showInfo = (message: string) => {
    showToast({ text: message, type: 'info' });
  };

  const showWarning = (message: string) => {
    showToast({ text: message, type: 'warn' });
  };

  return {
    showError,
    showSuccess,
    showInfo,
    showWarning
  };
}; 