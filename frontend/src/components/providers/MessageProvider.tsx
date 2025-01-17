import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Toast } from '@/components/atomic';
import { useMessageStore } from '@/stores/messageStore';

export const MessageProvider = () => {
  const { t } = useTranslation();
  const toast = useRef<Toast>(null);
  const { message, clearMessage } = useMessageStore();

  useEffect(() => {
    if (message && toast.current) {
      toast.current.show({
        severity: message.type,
        summary: t(message.text),
        life: 5000
      });
    }
    
    // Cleanup function to clear the message when the effect is cleaned up
    return () => {
      if (message) {
        clearMessage();
      }
    };
  }, [message, t, clearMessage]);

  return <Toast ref={toast} position="top-center" />;
}; 