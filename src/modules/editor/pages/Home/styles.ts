import { styled } from '~/styles';

export const Wrapper = styled('div', {
  minWidth: '40rem',
  width: '100%',
  maxWidth: '70rem',
});

export const Container = styled('main', {
  width: '100%',
  height: '100vh',
  padding: '$6',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
