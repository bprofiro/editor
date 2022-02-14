import { styled } from '~/styles';

export const Container = styled('div', {
  '.remirror-editor-wrapper': {
    maxHeight: 700,
    minHeight: 50,
    overflowY: 'scroll',
    padding: '$4',
  },

  pre: {
    borderRadius: '$sm',
  },

  background: '$grey-800',
  borderRadius: '$sm',

  '.remirror-editor.ProseMirror': {
    fontFamily: '$default',
    boxShadow: 'none',
    padding: 0,
    overflow: 'visible',
    color: '$text-title',
    lineHeight: '$base',

    '&.ProseMirror-focused': {
      boxShadow: 'none',
    },

    p: {
      fontSize: '$md',

      '& + &': {
        marginTop: '$2',
      },
    },
  },

  '.remirror-is-empty:first-of-type::before': {
    fontFamily: '$default',
    fontStyle: 'normal',
    color: '$text-support',
  },

  '.remirror-floating-popover': {
    zIndex: '$overlay',
  },

  '.remirror-mention-atom-user, .remirror-mention-atom-tag, .remirror-suggest-atom':
    {
      padding: 0,
      fontFamily: '$default',
      fontWeight: 'normal',
      fontSize: '$md',

      color: '$secondary',

      background: 'transparent',
    },

  '.remirror-mention-atom-popup-wrapper': {
    background: '$grey-700',
    borderRadius: '$sm',
    overflow: 'auto',
    padding: 0,

    minHeight: '3.125rem',

    boxShadow: '4px 16px 24px rgba(0, 0, 0, 0.25)',
  },

  '.remirror-mention-atom-popup-item': {
    padding: 0,
  },

  '.remirror-mention-atom-popup-item + .remirror-mention-atom-popup-item': {
    borderTop: '1px solid $grey-600',
  },

  '.remirror-mention-atom-popup-highlight': {
    background: '$grey-600',
  },

  '.remirror-mention-atom-popup-hovered': {
    background: '$grey-500',
  },
});
