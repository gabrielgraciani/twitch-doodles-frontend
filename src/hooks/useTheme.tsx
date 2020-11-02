import React, {
  useEffect,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useCallback,
} from 'react';
import {
  ThemeProvider as ThemeProviderStyledComponents,
  DefaultTheme,
} from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }

    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

interface ThemeContextData {
  theme: unknown;
  toggleTheme: () => void;
}

interface ThemeContextProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ThemeProvider = ({ children }: ThemeContextProps): React.ReactElement => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyledComponents theme={theme}>
        {children}
      </ThemeProviderStyledComponents>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider2');
  }
  return context;
}

export { ThemeProvider, useTheme };
