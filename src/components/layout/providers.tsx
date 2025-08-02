
'use client';

import {createContext, useCallback, useContext, useEffect, useState} from 'react';

type Theme = string;

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'system';
    }
    return window.localStorage.getItem('theme') || 'system';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', newTheme);
    }
    setThemeState(newTheme);
  }, []);

  const value = {
    theme,
    setTheme,
  };

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
