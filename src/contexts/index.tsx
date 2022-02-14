import { PropsWithRequiredChildren } from '../common/types/index';
import { AppThemeProvider } from './theme';

export const AppProviders = ({ children }: PropsWithRequiredChildren) => {
  return <AppThemeProvider>{children}</AppThemeProvider>;
};
