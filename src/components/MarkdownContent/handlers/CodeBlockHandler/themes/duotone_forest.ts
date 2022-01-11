import { styled } from '~/styles';

export const DuotoneForest = styled('div', {
  background: '#2a2d2a',
  borderRadius: '$sm',
  margin: '$4 0',
  padding: '$3',

  "code[class*='language-'], pre[class*='language-']": {
    fontFamily:
      "Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono','Nimbus Mono L', 'Courier New', Courier, monospace",
    fontSize: '14px',
    lineHeight: '1.375',
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    tabSize: '4',
    hyphens: 'none',
    background: '#2a2d2a',
    color: '#687d68',
  },

  "pre[class*='language-']::-moz-selection, pre[class*='language-'] ::-moz-selection, code[class*='language-']::-moz-selection, code[class*='language-'] ::-moz-selection":
    {
      textShadow: 'none',
      background: '#435643',
    },

  "pre[class*='language-']::selection, pre[class*='language-'] ::selection, code[class*='language-']::selection, code[class*='language-'] ::selection":
    {
      textShadow: 'none',
      background: '#435643',
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
    color: '#535f53',
  },

  '.token.punctuation, .token.punctuation.important': {
    color: '#535f53',
  },

  '.token.namespace': {
    opacity: 0.7,
  },

  '.token.tag, .token.operator, .token.number': {
    color: '#a2b34d',
  },

  '.token.property, .token.function': {
    color: '#687d68',
  },

  '.token.tag-id, .token.selector, .token.atrule-id': {
    color: '#f0fff0',
  },

  'code.language-javascript, .token.attr-name': {
    color: '#b3d6b3',
  },

  'code.language-css, code.language-scss, .token.boolean, .token.string, .token.entity, .token.url, .language-css .token.string, .language-scss .token.string, .style .token.string, .token.attr-value, .token.keyword, .token.control, .token.directive, .token.unit, .token.statement, .token.regex, .token.atrule':
    {
      color: '#e5fb79',
    },

  '.token.placeholder, .token.variable': {
    color: '#e5fb79',
  },

  '.token.deleted': {
    textDecoration: 'line-through',
  },

  '.token.inserted': {
    borderBottom: '1px dotted #f0fff0',
    textDecoration: 'none',
  },

  '.token.italic': {
    fontStyle: 'italic',
  },

  '.token.important, .token.bold': {
    fontWeight: 'bold',
  },

  '.token.important': {
    color: '#b3d6b3',
  },

  '.token.entity': {
    cursor: 'help',
  },

  'pre > code.highlight': {
    outline: '0.4em solid #5c705c',
    outlineOffset: '0.4em',
  },

  '.line-numbers .line-numbers-rows': {
    borderRightColor: '#2c302c',
  },

  '.line-numbers-rows > span:before': {
    color: '#3b423b',
  },

  '.line-highlight': {
    background: 'rgba(162, 179, 77, 0.2)',
  },
});
