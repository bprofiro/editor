import { styled } from '~/styles';

export const GhColors = styled('div', {
  background: '#fff',
  borderRadius: '$sm',
  margin: '$4 0',
  padding: '$3',

  "code[class*='language-'], pre[class*='language-']": {
    color: '#393a34',
    fontFamily:
      "Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace",
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    fontSize: '0.95em',
    lineHeight: '1.2em',
    tabSize: '4',
    hyphens: 'none',
  },

  "pre[class*='language-']::-moz-selection, pre[class*='language-'] ::-moz-selection, code[class*='language-']::-moz-selection, code[class*='language-'] ::-moz-selection":
    {
      background: '#b3d4fc',
    },

  "pre[class*='language-']::selection, pre[class*='language-'] ::selection, code[class*='language-']::selection, code[class*='language-'] ::selection":
    {
      background: '#b3d4fc',
    },

  "pre[class*='language-']": {
    padding: '1em',
    margin: '0.5em 0',
    overflow: 'auto',
    border: '1px solid #dddddd',
  },

  ":not(pre) > code[class*='language-']": {
    padding: '0.2em',
    paddingTop: '1px',
    paddingBottom: '1px',
    background: '#f8f8f8',
    border: '1px solid #dddddd',
  },

  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: '#999988',
    fontStyle: 'italic',
  },

  '.token.namespace': {
    opacity: 0.7,
  },

  '.token.string, .token.attr-value': {
    color: '#e3116c',
  },

  '.token.punctuation, .token.operator': {
    color: '#393a34',
  },

  '.token.entity, .token.url, .token.symbol, .token.number, .token.boolean, .token.variable, .token.constant, .token.property, .token.regex, .token.inserted':
    {
      color: '#36acaa',
    },

  '.token.atrule, .token.keyword, .token.attr-name, .language-autohotkey .token.selector':
    {
      color: '#00a4db',
    },

  '.token.function, .token.deleted, .language-autohotkey .token.tag': {
    color: '#9a050f',
  },

  '.token.tag, .token.selector, .language-autohotkey .token.keyword': {
    color: '#00009f',
  },

  '.token.important, .token.function, .token.bold': {
    fontWeight: 'bold',
  },

  '.token.italic': {
    fontStyle: 'italic',
  },
});
