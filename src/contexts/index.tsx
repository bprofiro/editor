import { PropsWithRequiredChildren } from '../common/types/index';

import { AppThemeProvider } from './theme';

export const AppProviders = ({ children }: PropsWithRequiredChildren) => (
  <AppThemeProvider>{children}</AppThemeProvider>
);
