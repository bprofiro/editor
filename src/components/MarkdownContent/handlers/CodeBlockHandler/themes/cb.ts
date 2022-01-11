import { styled } from '~/styles';

export const Cb = styled('div', {
  background: '#222',
  borderRadius: '$sm',
  margin: '$4 0',
  padding: '$3',

  "code[class*='language-'], pre[class*='language-']": {
    color: '#fff',
    textShadow: '0 1px 1px #000',
    fontFamily: "Menlo, Monaco, 'Courier New', monospace",
    direction: 'ltr',
    textAlign: 'left',
    wordSpacing: 'normal',
    whiteSpace: 'pre',
    wordWrap: 'normal',
    lineHeight: '1.4',
    background: 'none',
    border: '0',
    tabSize: '4',
    hyphens: 'none',
  },

  "pre[class*='language-'] code": {
    float: 'left',
    padding: '0 15px 0 0',
  },

  "pre[class*='language-'], :not(pre) > code[class*='language-']": {
    background: '#222',
  },

  "pre[class*='language-']": {
    padding: '15px',
    margin: '1em 0',
    overflow: 'auto',
    borderRadius: '8px',
  },

  ":not(pre) > code[class*='language-']": {
    padding: '5px 10px',
    lineHeight: '1',
    borderRadius: '3px',
  },

  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: '#797979',
  },

  'token.selector, .token.operator, .token.punctuation, .token.punctuation.important':
    {
      color: '#fff',
    },

  '.token.namespace': {
    opacity: 0.7,
  },

  '.token.tag, .token.boolean': {
    color: '#ffd893',
  },

  '.token.atrule, .token.attr-value, .token.hex, .token.string': {
    color: '#b0c975',
  },

  '.token.property, .token.entity, .token.url, .token.attr-name, .token.keyword':
    {
      color: '#c27628',
    },

  '.token.regex': {
    color: '#9b71c6',
  },

  '.token.entity': {
    cursor: 'help',
  },

  '.token.function, .token.constant': {
    color: '#e5a638',
  },

  '.token.variable': {
    color: '#fdfba8',
  },

  '.token.number': {
    color: '#8799b0',
  },

  '.token.important, .token.deliminator': {
    color: '#e45734',
  },

  'pre[data-line]': {
    position: 'relative',
    padding: '1em 0 1em 3em',
  },

  '.line-highlight': {
    position: 'absolute',
    left: '0',
    right: '0',
    marginRop: '1em',
    background: 'rgba(255, 255, 255, 0.2)',
    pointerEvents: 'none',
    lineHeight: 'inherit',
    whiteSpace: 'pre',
  },

  '.line-highlight:before, .line-highlight[data-end]:after': {
    content: 'attr(data-start)',
    position: 'absolute',
    top: '0.3em',
    left: '0.6em',
    minWidth: '1em',
    padding: '0 0.5em',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#fff',
    font: 'bold 65%/1.5 sans-serif',
    textAlign: 'center',
    borderRadius: '8px',
    textShadow: 'none',
  },

  '.line-highlight[data-end]:after': {
    content: 'attr(data-end)',
    top: 'auto',
    bottom: '0.4em',
  },

  '.line-numbers-rows': {
    margin: 0,
  },

  '.line-numbers-rows span': {
    paddingRight: '10px',
    borderRight: '3px #d9d336 solid',
  },
});
