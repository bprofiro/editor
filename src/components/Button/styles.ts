import { styled } from '~/styles';

export const Container = styled('button', {
  background: '$primary',
  color: '$grey-100',
  fontSize: '$md',
  borderRadius: '$sm',
  textTransform: 'uppercase',
  border: 'none',
  fontWeight: 'bold',

  padding: '$3 $5',

  marginTop: '$4',
  marginLeft: 'auto',
  transition: 'filter 0.5s',

  '&:hover': {
    filter: 'brightness(0.8)',
  },
});
