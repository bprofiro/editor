import { createContext, useState } from 'react';

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
  | 'duotone_light'
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
  const [currentTheme, setCurrentTheme] = useState<ThemeState>('a11y_dark');

  const toggleTheme = (theme: ThemeState) => {
    setCurrentTheme(theme);
  };

  return (
    <AppThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};
