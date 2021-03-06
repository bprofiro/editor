import { createContext, useEffect, useState } from 'react';

import { parseCookies, setCookie } from 'nookies';

import * as themes from '~/styles/themes';

import { PropsWithRequiredChildren } from '../common/types/index';

export type ThemeState =
  | 'a11y_dark'
  | 'atom_dark'
  | 'base16_ateliersulphurpool_light'
  | 'cb'
  | 'darcula'
  | 'dracula'
  | 'duotone_dark'
  | 'duotone_earth'
  | 'duotone_forest'
  | 'duotone_sea'
  | 'duotone_space'
  | 'gh_colors'
  | 'hopscotch'
  | 'pojoaque'
  | 'vs'
  | 'wrap'
  | 'xonokai';

type AppThemeContextData = {
  currentTheme: ThemeState;
  toggleTheme(theme: ThemeState): void;
};

export const AppThemeContext = createContext<AppThemeContextData>(
  {} as AppThemeContextData,
);

export const AppThemeProvider = ({ children }: PropsWithRequiredChildren) => {
  const { editor_theme: cookiesTheme = 'a11y_dark' } = parseCookies();

  const [currentTheme, setCurrentTheme] = useState<ThemeState>(
    cookiesTheme as ThemeState,
  );

  const toggleTheme = (theme: ThemeState) => {
    setCurrentTheme(theme);

    setCookie(undefined, 'editor_theme', theme, {
      maxAge: 60 * 60 * 24 * 30, // 30days
      path: '/',
    });
  };

  useEffect(() => {
    document.body.className = themes[currentTheme];
  }, [currentTheme]);

  return (
    <AppThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};
