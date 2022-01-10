import { styled } from '~/styles';

export const DuotoneEarth = styled('div', {
  background: '#322d29',
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
    background: '#322d29',
    color: '#88786d',
  },

  "pre[class*='language-']::-moz-selection, pre[class*='language-'] ::-moz-selection, code[class*='language-']::-moz-selection, code[class*='language-'] ::-moz-selection": {
    textShadow: 'none',
    background: '#6f5849',
  },

  "pre[class*='language-']::selection, pre[class*='language-'] ::selection, code[class*='language-']::selection, code[class*='language-'] ::selection": {
    textShadow: 'none',
    background: '#6f5849',
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
    color: '#6a5f58',
  },

  '.token.punctuation, .token.punctuation.important': {
    color: '#6a5f58',
  },

  '.token.namespace': {
    opacity: 0.7,
  },

  '.token.tag, .token.operator, .token.number': {
    color: '#bfa05a',
  },

  '.token.property, .token.function': {
    color: '#88786d',
  },

  '.token.tag-id, .token.selector, .token.atrule-id': {
    color: '#fff3eb',
  },

  'code.language-javascript, .token.attr-name': {
    color: '#a48774',
  },

  'code.language-css, code.language-scss, .token.boolean, .token.string, .token.entity, .token.url, .language-css .token.string, .language-scss .token.string, .style .token.string, .token.attr-value, .token.keyword, .token.control, .token.directive, .token.unit, .token.statement, .token.regex, .token.atrule': {
    color: '#fcc440',
  },

  '.token.placeholder, .token.variable': {
    color: '#fcc440',
  },

  '.token.deleted': {
    textDecoration: 'line-through',
  },

  '.token.inserted': {
    borderBottom: '1px dotted #fff3eb',
    textDecoration: 'none',
  },

  '.token.italic': {
    fontStyle: 'italic',
  },

  '.token.important, .token.bold': {
    fontWeight: 'bold',
  },

  '.token.important': {
    color: '#a48774',
  },

  '.token.entity': {
    cursor: 'help',
  },

  'pre > code.highlight': {
    outline: '0.4em solid #816d5f',
    outlineOffset: '0.4em',
  },

  '.line-numbers .line-numbers-rows': {
    borderRightColor: '#35302b',
  },

  '.line-numbers-rows > span:before': {
    color: '#46403d',
  },

  '.line-highlight': {
    background: 'rgba(191, 160, 90, 0.2)',
  },
});
