import { styled } from '~/styles';

export const Hopscotch = styled('div', {
  background: '#322931',
  borderRadius: '$sm',
  margin: '$4 0',
  padding: '$3',

  "code[class*='language-'], pre[class*='language-']": {
    fontFamily:
      "'Fira Mono', Menlo, Monaco, 'Lucida Console', 'Courier New', Courier, monospace",
    fontSize: '16px',
    lineHeight: '1.375',
    direction: 'ltr',
    textAlign: 'left',
    wordSpacing: 'normal',
    tabSize: '4',
    hyphens: 'none',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all',
    wordWrap: 'break-word',
    background: '#322931',
    color: '#b9b5b8',
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
    color: '#797379',
  },

  '.token.punctuation, .token.punctuation.important': {
    color: '#b9b5b8',
  },

  '.namespace': {
    opacity: 0.7,
  },

  '.token.null, .token.operator, .token.boolean, .token.number': {
    color: '#fd8b19',
  },

  '.token.property': {
    color: '#fdcc59',
  },

  '.token.tag': {
    color: '#1290bf',
  },

  '.token.string': {
    color: '#149b93',
  },

  '.token.selector': {
    color: '#c85e7c',
  },

  '.token.attr-name': {
    color: '#fd8b19',
  },

  '.token.entity, .token.url, .language-css .token.string, .style .token.string':
    {
      color: '#149b93',
    },

  '.token.attr-value, .token.keyword, .token.control, .token.directive, .token.unit':
    {
      color: '#8fc13e',
    },

  '.token.statement, .token.regex, .token.atrule': {
    color: '#149b93',
  },

  '.token.placeholder, .token.variable': {
    color: '#1290bf',
  },

  '.token.important': {
    color: '#dd464c',
    fontWeight: 'bold',
  },

  '.token.entity': {
    cursor: 'help',
  },

  'pre > code.highlight': {
    outline: '0.4em solid red',
    outlineOffset: '0.4em',
  },
});
