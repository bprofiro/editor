import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { styled, keyframes } from '~/styles';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger, {
  background: '$primary',
  color: '$grey-100',
  fontSize: '$md',
  borderRadius: '$sm',
  textTransform: 'uppercase',
  border: 'none',
  fontWeight: 'bold',

  padding: '$3 $5',
  marginTop: '$3',

  transition: 'filter 0.5s',

  '&:hover': {
    filter: 'brightness(0.8)',
  },
});

export const Content = styled(DropdownMenu.Content, {
  marginTop: '$2',
  maxHeight: '150px',
  overflowY: 'scroll',
  borderRadius: 4,
  fontSize: 15,
  lineHeight: 1,
  color: '$grey-100',
  backgroundColor: '$grey-600',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  display: 'flex',
  flexDirection: 'column',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

export const Item = styled(DropdownMenu.Item, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background 0.5s',
  padding: '10px 15px',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$grey-700',
  },
});
