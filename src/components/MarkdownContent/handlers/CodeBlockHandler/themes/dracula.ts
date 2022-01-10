import { styled } from '~/styles';

export const Dracula = styled('div', {
  background: '#282a36',
  borderRadius: '$sm',
  margin: '$4 0',
  padding: '$3',

  "code[class*='language-'], pre[class*='language-']": {
    color: '#f8f8f2',
    background: 'none',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
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

  ":not(pre) > code[class*='language-'], pre[class*='language-']": {
    background: '#282a36',
  },

  ":not(pre) > code[class*='language-']": {
    padding:'0.1em',
    borderRadius:'0.3em',
    whiteSpace: 'normal',
  },

  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: '#6272a4',
  },

  '.token.punctuation, .token.punctuation.important': {
    color: '#f8f8f2',
  },

  '.namespace': {
    opacity: '0.7',
  },

  '.token.property, .token.tag, .token.constant, .token.symbol, .token.deleted': {
    color: '#ff79c6',
  },

  '.token.boolean, .token.number': {
    color: '#bd93f9',
  },

  '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
    color: '#50fa7b',
  },

  '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable': {
    color: '#f8f8f2',
  },

  '.token.atrule, .token.attr-value, .token.function, .token.class-name': {
    color: '#f1fa8c',
  },

  '.token.keyword': {
    color: '#8be9fd',
  },

  '.token.regex, .token.important': {
    color: '#ffb86c',
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
