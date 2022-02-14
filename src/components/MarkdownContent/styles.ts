import { styled } from '~/styles';

export const Markdown = styled('div', {
  width: '100%',
  minHeight: 150,
  background: '$grey-800',
  borderRadius: '$sm',
  marginTop: '$4',
  padding: '$4',

  p: {
    color: '$text-base',
    fontFamily: '$default',
    lineHeight: '$base',

    '& + &': {
      marginTop: '$4',
    },
  },

  '.remirror-mention-atom, .remirror-suggest-atom, .suggest-tag': {
    color: '$primary',
    fontFamily: '$default',
    fontWeight: '$regular',
    lineHeight: '$base',
    margin: 0,
    padding: 0,
  },

  blockquote: {
    borderLeft: '3px solid #dee2e6',
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: '10px',
    fontStyle: 'italic',
    marginTop: '$4',
  },

  pre: {
    borderRadius: '$sm',
  },
});
