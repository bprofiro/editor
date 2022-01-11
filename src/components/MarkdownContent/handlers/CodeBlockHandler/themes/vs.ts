import { styled } from '~/styles';

export const Vs = styled('div', {
  background: '#fff',
  borderRadius: '$sm',
  margin: '$4 0',
  padding: '$3',

  "code[class*='language-'], pre[class*='language-']": {
    color: '#393a34',
    fontFamily:
      "'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace",
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
      background: '#c1def1',
    },

  "pre[class*='language-']::selection, pre[class*='language-'] ::selection, code[class*='language-']::selection, code[class*='language-'] ::selection":
    {
      background: '#c1def1',
    },

  "pre[class*='language-']": {
    padding: '1em',
    margin: '0.5em 0',
    overflow: 'auto',
    border: '1px solid #dddddd',
    backgroundColor: 'white',
  },

  ":not(pre) > code[class*='language-']": {
    padding: '0.2em',
    paddingTop: '1px',
    paddingBottom: '1px',
    background: '#f8f8f8',
    border: '1px solid #dddddd',
  },

  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: '#008000',
    fontStyle: 'italic',
  },

  '.token.namespace': {
    opacity: 0.7,
  },

  '.token.string': {
    color: '#a31515',
  },

  '.token.punctuation, .token.operator': {
    color: '#393a34',
  },

  '.token.url, .token.symbol, .token.number, .token.boolean, .token.variable, .token.constant, .token.inserted':
    {
      color: '#36acaa',
    },

  ".token.atrule, .token.keyword, .token.attr-value, .language-autohotkey .token.selector, .language-json .token.boolean, .language-json .token.number, code[class*='language-css']":
    {
      color: '#0000ff',
    },

  '.token.function': {
    color: '#393a34',
  },

  '.token.deleted, .language-autohotkey .token.tag': {
    color: '#9a050f',
  },

  '.token.selector, .language-autohotkey .token.keyword': {
    color: '#00009f',
  },

  '.token.important, .token.bold': {
    fontWeight: 'bold',
  },

  '.token.italic': {
    fontStyle: 'italic',
  },

  '.token.class-name, .language-json .token.property': {
    color: '#2b91af',
  },

  '.token.tag, .token.selector': {
    color: '#800000',
  },

  '.token.attr-name, .token.property, .token.regex, .token.entity': {
    color: '#ff0000',
  },

  '.token.directive.tag .tag': {
    background: '#ffff00',
    color: '#393a34',
  },

  '.line-numbers .line-numbers-rows': {
    borderRightColor: '#a5a5a5',
  },

  '.line-numbers-rows > span:before': {
    color: '#2b91af',
  },

  '.line-highlight': {
    background: 'rgba(193, 222, 241, 0.2)',
  },
});
