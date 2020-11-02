import React from 'react';

import { ThemeProvider } from './useTheme';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps): React.ReactElement => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default AppProvider;
