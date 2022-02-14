import Head from 'next/head';

import { a11y_dark } from '~/styles/themes';

import { ThemeDropdown } from './ThemeDropdown';
import { Container, Wrapper } from './styles';

export const Home = () => {
  return (
    <Container>
      <Head>
        <title>Editor</title>
      </Head>
      <Wrapper>
        <h1>Escolha um tema para ir ao editor:</h1>

        <ThemeDropdown />
      </Wrapper>
    </Container>
  );
};
