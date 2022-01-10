import { useContext } from 'react';

import { AppThemeContext } from '../contexts/theme';

export const useTheme = () => {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error(`useTheme must be used within an AppThemeProvider`);
  }

  return context;
};
