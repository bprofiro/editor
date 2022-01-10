import { styled } from '~/styles';

export const Base16AteliersulphurpoolLight = styled('div', {
  background: '#f5f7ff',
  borderRadius: '$sm',
  margin: '$4 0',
  padding: '$3',

  "code[class*='language-'], pre[class*='language-']": {
    fontFamily: "Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', 'Courier New', Courier, monospace",
    fontSize: '14px',
    lineHeight: '1.375',
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    tabSize: '4',
    hyphens: 'none',
    background: '#f5f7ff',
    color: '#5e6687',
  },

  "pre[class*='language-']::-moz-selection, pre[class*='language-'] ::-moz-selection, code[class*='language-']::-moz-selection, code[class*='language-'] ::-moz-selection": {
    textShadow: 'none',
    background: '#dfe2f1',
  },

  "pre[class*='language-']::selection, pre[class*='language-'] ::selection, code[class*='language-']::selection, code[class*='language-'] ::selection": {
    textShadow: 'none',
    background: '#dfe2f1',
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
    color: '#898ea4',
  },

  '.token.punctuation, .token.punctuation.important': {
    color: '#5e6687',
  },

  '.token.namespace': {
    opacity: '0.7',
  },

  '.token.operator, .token.boolean, .token.number': {
    color: '#c76b29',
  },

  '.token.property': {
    color: '#c08b30',
  },

  '.token.tag': {
    color: '#3d8fd1',
  },

  '.token.string': {
    color: '#22a2c9',
  },

  '.token.selector': {
    color: '#6679cc',
  },

  '.token.attr-name': {
    color: '#c76b29',
  },

  '.token.entity, .token.url, .language-css .token.string, .style .token.string': {
    color: '#22a2c9',
  },
  '.token.attr-value, .token.keyword, .token.control, .token.directive, .token.unit': {
    color: '#ac9739',
  },

  '.token.statement, .token.regex, .token.atrule': {
    color: '#22a2c9',
  },

  '.token.placeholder, .token.variable': {
    color: '#3d8fd1',
  },

  '.token.deleted': {
    textDecoration: 'line-through',
  },

  '.token.inserted': {
    borderBottom: '1px dotted #202746',
    textDecoration: 'none',
  },

  '.token.italic': {
    fontStyle: 'italic',
  },

  '.token.important, .token.bold': {
    fontWeight: 'bold',
  },

  '.token.important': {
    color: '#c94922',
  },

  '.token.entity': {
    cursor: 'help',
  },

  'pre > code.highlight': {
    outline: '0.4em solid #c94922',
    outlineOffset: '0.4em',
  },

  '.line-numbers .line-numbers-rows': {
    borderRightColor: '#dfe2f1',
  },

  '.line-numbers-rows > span:before': {
    color: '#979db4',
  },

  '.line-highlight': {
    background: 'rgba(107, 115, 148, 0.2)',
  },
});
