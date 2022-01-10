import { styled } from '~/styles';

export const AtomDark = styled('div', {
  background: '#1d1f21',
  borderRadius: '$sm',
  margin: '$4 0',
  padding: '$3',

  "code[class*='language-'], pre[class*='language-']":  {
    color: '#c5c8c6',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
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

  ":not(pre) > code[class*='language-'], pre[class*='language-']": {
    background: '#1d1f21',
  },

  ":not(pre) > code[class*='language-']": {
    padding: '0.1em',
    borderRadius: '0.3em',
  },

  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: '#7c7c7c',
  },

  '.token.punctuation, .token.punctuation.important': {
    color: '#c5c8c6',
  },

  '.namespace': {
    opacity: 0.7,
  },

  '.token.property, .token.keyword, .token.tag': {
    color: '#96cbfe',
  },

  '.token.class-name': {
    color: '#ffffb6',
    textDecoration: 'underline',
  },

  '.token.boolean, .token.constant': {
    color: '#99cc99',
  },

  '.token.symbol, .token.deleted': {
    color: '#f92672',
  },

  '.token.number': {
    color: '#ff73fd',
  },

  '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
    color: '#a8ff60',
  },

  '.token.variable': {
    color: '#c6c5fe',
  },

  '.token.operator': {
    color: '#ededed',
  },

  '.token.entity': {
    color: '#ffffb6',
    cursor: 'help',
  },

  '.token.url': {
    color: '#96cbfe',
  },

  '.language-css .token.string, .style .token.string': {
    color: '#87c38a',
  },

  '.token.atrule, .token.attr-value': {
    color: '#f9ee98',
  },

  '.token.function': {
    color: '#dad085',
  },

  '.token.regex': {
    color: '#e9c062',
  },

  '.token.important': {
    color: '#fd971f',
  },

  '.token.important, .token.bold':{
    fontWeight: 'bold',
  },

  '.token.italic': {
    fontStyle: 'italic',
  },
});
