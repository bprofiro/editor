import { styled } from '~/styles';

export const DuotoneSpace = styled('div', {
  background: '#24242e',
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
    background: '#24242e',
    color: '#767693',
  },

  "pre[class*='language-']::-moz-selection, pre[class*='language-'] ::-moz-selection, code[class*='language-']::-moz-selection, code[class*='language-'] ::-moz-selection":
    {
      textShadow: 'none',
      background: '#5151e6',
    },

  "pre[class*='language-']::selection, pre[class*='language-'] ::selection, code[class*='language-']::selection, code[class*='language-'] ::selection":
    {
      textShadow: 'none',
      background: '#5151e6',
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
    color: '#5b5b76',
  },

  '.token.punctuation, .token.punctuation.important': {
    color: '#5b5b76',
  },

  '.token.namespace': {
    opacity: 0.7,
  },

  '.token.tag, .token.operator, .token.number': {
    color: '#dd672c',
  },

  '.token.property, .token.function': {
    color: '#767693',
  },

  '.token.tag-id, .token.selector, .token.atrule-id': {
    color: '#ebebff',
  },

  'code.language-javascript, .token.attr-name': {
    color: '#aaaaca',
  },

  'code.language-css, code.language-scss, .token.boolean, .token.string, .token.entity, .token.url, .language-css .token.string, .language-scss .token.string, .style .token.string, .token.attr-value, .token.keyword, .token.control, .token.directive, .token.unit, .token.statement, .token.regex, .token.atrule':
    {
      color: '#fe8c52',
    },

  '.token.placeholder, .token.variable': {
    color: '#fe8c52',
  },

  '.token.deleted': {
    textDecoration: 'line-through',
  },

  '.token.inserted': {
    borderBottom: '1px dotted #ebebff',
    textDecoration: 'none',
  },

  '.token.italic': {
    fontStyle: 'italic',
  },

  '.token.important, .token.bold': {
    fontWeight: 'bold',
  },

  '.token.important': {
    color: '#aaaaca',
  },

  '.token.entity': {
    cursor: 'help',
  },

  'pre > code.highlight': {
    outline: '0.4em solid #7676f4',
    outlineOffset: '0.4em',
  },

  '.line-numbers .line-numbers-rows': {
    borderRightColor: '#262631',
  },

  '.line-numbers-rows > span:before': {
    color: '#393949',
  },

  '.line-highlight': {
    background: 'rgba(221, 103, 44, 0.2)',
  },
});
