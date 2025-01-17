import { create } from 'zustand';

type MessageType = 'success' | 'error' | 'info' | 'warn';

interface Message {
  text: string;
  type: MessageType;
}

interface MessageStore {
  message: Message | null;
  showToast: (message: Message | null) => void;
  clearMessage: () => void;
}

const AUTO_CLEAR_DURATION = 5000; // 5 seconds

export const useMessageStore = create<MessageStore>((set) => ({
  message: null,
  showToast: (message) => {
    set({ message });
    if (message) {
      setTimeout(() => {
        set({ message: null });
      }, AUTO_CLEAR_DURATION);
    }
  },
  clearMessage: () => set({ message: null }),
})); 