import Head from 'next/head';

import { ThemeDropdown } from '~/components/ThemeDropdown';

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
