import { styled } from '~/styles';

export const Container = styled('div', {
  gap: '$3',
  display: 'flex',
  alignItems: 'center',

  height: '3rem',
  padding: '0 $5',

  span: {
    fontFamily: '$default',
    fontWeight: 'normal',
    fontSize: '$md',
    lineHeight: '$short',

    color: '$text-title',
  },
});
