import { styled } from '~/styles';

export const Container = styled('button', {
  background: '$rocketseat-mid',
  color: '$grey-100',
  fontSize: '$md',
  borderRadius: '$sm',
  textTransform: 'uppercase',
  border: 'none',
  fontWeight: 'bold',

  padding: '$3 $5',

  marginTop: '$4',
  marginLeft: 'auto',
  transition: 'background 0.5s',

  '&:hover': {
    background: '$rocketseat-light',
  },
});
