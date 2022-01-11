import { styled } from '~/styles';

export const A11yDark = styled('div', {
  background: '#2b2b2b',
  borderRadius: '$sm',
  margin: '$4 0',
  padding: '$3',

  "code[class*='language-'], pre[class*='language-']": {
    color: '#f8f8f2',
    background: 'black',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    tabSize: '4',
    hyphens: 'none',
  },

  "pre[class*='language-']": {
    padding: '1em',
    margin: '0.5em 0',
    overflow: 'auto',
    borderRadius: '0.3em',
  },

  ":not(pre) > code[class*='language-'],pre[class*='language-']": {
    background: '#2b2b2b',
  },

  ":not(pre) > code[class*='language-']": {
    padding: '0.1em',
    borderRadius: '0.3em',
    whiteSpace: 'normal',
  },

  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: '#d4d0ab',
  },

  '.token.punctuation, .token.punctuation.important': {
    color: '#fefefe',
  },

  '.token.property, .token.tag, .token.constant, .token.symbol, .token.deleted':
    {
      color: '#ffa07a',
    },

  '.token.boolean, .token.number': {
    color: '#00e0e0',
  },

  '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted':
    {
      color: '#abe338',
    },

  '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable':
    {
      color: '#00e0e0',
    },

  '.token.atrule, .token.attr-value, .token.function': {
    color: '#ffd700',
  },

  '.token.keyword': {
    color: '#00e0e0',
  },

  '.token.regex, .token.important': {
    color: '#ffd700',
  },

  '.token.important, .token.bold': {
    fontWeight: 'bold',
  },

  '.token.italic': {
    fontStyle: 'italic',
  },

  '.token.entity': {
    cursor: 'help',
  },
});
