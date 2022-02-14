import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'html, body, #__next': {
    minHeight: '100%',
  },

  body: {
    textRendering: 'optimizeLegibility !important',
    fontFamily: 'Roboto, sans-serif',
    background: '$color-background',
    color: '$text-base',
  },

  'h1, h2, h3, h4, h5, h6': {
    color: '$text-title',
  },

  a: {
    textDecoration: 'none',
    color: '$primary',
  },

  ul: {
    listSyle: 'none',
  },

  button: {
    cursor: 'pointer',
    fontFamily: 'Roboto, sans-serif',
  },

  'input, textarea': {
    outline: 0,
    background: '#121214',
    border: '2px solid #28272C',
    borderRadius: '5px',
    height: '50px',
    padding: '15px 21px',
    color: '#fff',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '17px',
    width: '100%',
    transition: 'border 0.2s',

    '&:focus': {
      borderColor: '#8257E5',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      color: '#696969',
      background: '#191919',
    },
  },

  '::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
    marginRight: '10px',
  },

  '::-webkit-scrollbar-corner': {
    border: 'none',
    background: 'none',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#3D3C42',
    borderRadius: '3px',
    cursor: 'move',
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
    border: 'none',
  },
});
