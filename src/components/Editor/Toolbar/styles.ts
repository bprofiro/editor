import * as Toolbar from '@radix-ui/react-toolbar';

import { styled } from '~/styles';

export const Container = styled(Toolbar.Root, {
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
});

export const Right = styled('section', {
  button: {
    margin: 0,
  },
});
