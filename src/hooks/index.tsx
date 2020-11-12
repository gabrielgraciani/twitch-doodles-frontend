import React from 'react';

import { ThemeProvider } from './useTheme';
import { ToastProvider } from './useToast';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps): React.ReactElement => (
  <ThemeProvider>
    <ToastProvider>{children}</ToastProvider>
  </ThemeProvider>
);

export default AppProvider;
