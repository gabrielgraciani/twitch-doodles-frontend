import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

import ToastContainer from '../components/ToastContainer';
import { ToastMessageProps } from '../interfaces/Toast';

interface ToastContextData {
  addToast: (message: Omit<ToastMessageProps, 'id'>) => void;
  removeToast: (id: string) => void;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider = ({
  children,
}: ToastProviderProps): React.ReactElement => {
  const [messages, setMessages] = useState<ToastMessageProps[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessageProps, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(oldMessages => [...oldMessages, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(oldMessages =>
      oldMessages.filter(message => message.id !== id),
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}

      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
