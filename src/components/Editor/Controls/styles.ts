import { styled } from '~/styles';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '$5',
  background: '$grey-700',
  borderRadius: '0 0 5px 5px',
});

export const Left = styled('section', {
  gap: '$3',
  display: 'flex',
  alignItems: 'center',

  button: {
    width: '$10',
    height: '$10',
    border: 'none',
    borderRadius: '$sm',
    background: '$grey-600',
    color: '$grey-100',
    fontWeight: '$bold'
  }
});

export const Right = styled('section', {
  button: {
    margin: 0,
  },
});