import type { AppProps } from 'next/app';

import { globalStyles } from '~/styles/global';
import { AppProviders } from '~/contexts';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  );
}

export default MyApp;
