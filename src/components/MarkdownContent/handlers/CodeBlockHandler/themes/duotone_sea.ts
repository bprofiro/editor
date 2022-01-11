import { styled } from '~/styles';

export const DuotoneSea = styled('div', {
  background: '#1d262f',
  borderRadius: '$sm',
  margin: '$4 0',
  padding: '$3',

  "code[class*='language-'], pre[class*='language-']": {
    fontFamily:
      "Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', 'Courier New', Courier, monospace",
    fontSize: '14px',
    lineHeight: '1.375',
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    tabSize: '4',
    hyphens: 'none',
    background: '#1d262f',
    color: '#57718e',
  },

  "pre[class*='language-']::-moz-selection, pre[class*='language-'] ::-moz-selection, code[class*='language-']::-moz-selection, code[class*='language-'] ::-moz-selection":
    {
      textShadow: 'none',
      background: '#004a9e',
    },

  "pre[class*='language-']::selection, pre[class*='language-'] ::selection, code[class*='language-']::selection, code[class*='language-'] ::selection":
    {
      textShadow: 'none',
      background: '#004a9e',
    },

  "pre[class*='language-']": {
    padding: '1em',
    margin: '0.5em 0',
    overflow: 'auto',
  },

  ":not(pre) > code[class*='language-']": {
    padding: '0.1em',
    borderRadius: '0.3em',
  },

  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: '#4a5f78',
  },

  '.token.punctuation, .token.punctuation.important': {
    color: '#4a5f78',
  },

  '.token.namespace': {
    opacity: 0.7,
  },

  '.token.tag, .token.operator, .token.number': {
    color: '#0aa370',
  },

  '.token.property, .token.function': {
    color: '#57718e',
  },

  '.token.tag-id, .token.selector, .token.atrule-id': {
    color: '#ebf4ff',
  },

  'code.language-javascript, .token.attr-name': {
    color: '#7eb6f6',
  },

  'code.language-css, code.language-scss, .token.boolean, .token.string, .token.entity, .token.url, .language-css .token.string, .language-scss .token.string, .style .token.string, .token.attr-value, .token.keyword, .token.control, .token.directive, .token.unit, .token.statement, .token.regex, .token.atrule':
    {
      color: '#47ebb4',
    },

  '.token.placeholder, .token.variable': {
    color: '#47ebb4',
  },

  '.token.deleted': {
    textDecoration: 'line-through',
  },

  '.token.inserted': {
    borderBottom: '1px dotted #ebf4ff',
    textDecoration: 'none',
  },

  '.token.italic': {
    fontStyle: 'italic',
  },

  '.token.important, .token.bold': {
    fontWeight: 'bold',
  },

  '.token.important': {
    color: '#7eb6f6',
  },

  '.token.entity': {
    cursor: 'help',
  },

  'pre > code.highlight': {
    outline: '0.4em solid #34659d',
    outlineOffset: '0.4em',
  },

  '.line-numbers .line-numbers-rows': {
    borderRightColor: '#1f2932',
  },

  '.line-numbers-rows > span:before': {
    color: '#2c3847',
  },

  '.line-highlight': {
    background: 'rgba(10, 163, 112, 0.2)',
  },
});
