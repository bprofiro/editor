import { styled } from '~/styles';

export const Xonokai = styled('div', {
  background: '#2a2a2a',
  borderRadius: '$sm',
  margin: '$4 0',
  padding: '$3',

  "code[class*='language-'], pre[class*='language-']": {
    tabSize: '2',
    hyphens: 'none',
    whiteSpace: 'pre-wrap',
    wordWrap: 'normal',
    fontFamily: "Menlo, Monaco, 'Courier New', monospace",
    fontSize: '14px',
    color: '#76d9e6',
    textShadow: 'none',
  },

  "pre[class*='language-'], :not(pre) > code[class*='language-']": {
    background: '#2a2a2a',
  },

  "pre[class*='language-']": {
    padding: '15px',
    borderRadius: '4px',
    border: '1px solid #e1e1e8',
    overflow: 'auto',
    position: 'relative',
  },

  "pre[class*='language-'] code": {
    whiteSpace: 'pre',
    display: 'block',
  },

  ":not(pre) > code[class*='language-']": {
    padding: '0.15em 0.2em 0.05em',
    borderRadius: '0.3em',
    border: '0.13em solid #7a6652',
    boxShadow: '1px 1px 0.3em -0.1em #000 inset',
  },

  '.token.namespace': {
    opacity: 0.7,
  },

  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: '#6f705e',
  },

  '.token.operator, .token.boolean, .token.number': {
    color: '#a77afe',
  },

  '.token.attr-name, .token.string': {
    color: '#e6d06c',
  },

  '.token.entity, .token.url, .language-css .token.string, .style .token.string': {
    color: '#e6d06c',
  },

  '.token.selector, .token.inserted': {
    color: '#a6e22d',
  },

  '.token.atrule, .token.attr-value, .token.keyword, .token.important, .token.deleted': {
    color: '#ef3b7d',
  },

  '.token.regex, .token.statement': {
    color: '#76d9e6',
  },

  '.token.placeholder, .token.variable': {
    color: '#fff',
  },

  '.token.important, .token.statement, .token.bold': {
    fontWeight: 'bold',
  },

  '.token.punctuation, .token.punctuation.important': {
    color: '#bebec5',
  },

  '.token.entity': {
    cursor: 'help',
  },

  '.token.italic': {
    fontStyle: 'italic',
  },

  'code.language-markup': {
    color: '#f9f9f9',
  },

  'code.language-markup .token.tag': {
    color: '#ef3b7d',
  },

  'code.language-markup .token.attr-namye': {
    color: '#a6e22d',
  },

  'code.language-markup .token.attr-value': {
    color: '#e6d06c',
  },

  'code.language-markup .token.style, code.language-markup .token.script': {
    color: '#76d9e6',
  },

  'code.language-markup .token.script .token.keyword': {
    color: '#76d9e6',
  },

  "pre[class*='language-'][data-line]": {
    position: 'relative',
    padding: '1em 0 1em 3em',
  },

  "pre[data-line] .line-highlight": {
    position: 'absolute',
    left: '0',
    right: '0',
    padding: '0',
    marginTop: '1em',
    background: 'rgba(255, 255, 255, 0.08)',
    pointerEvents: 'none',
    lineHeight: 'inherit',
    whiteSpace: 'pre',
  },

  "pre[data-line] .line-highlight:before, pre[data-line] .line-highlight[data-end]:after": {
    content: 'attr(data-start)',
    position: 'absolute',
    top: '0.4em',
    left: '0.6em',
    minWidth: '1em',
    padding: '0.2em 0.5em',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    color: 'black',
    font: 'caption',
    height: '1em',
    lineHeight: '1em',
    textAlign: 'center',
    borderRadius: '999px',
    textShadow: 'none',
    boxShadow: '0 1px 1px rgba(255, 255, 255, 0.7)',
  },

  "pre[data-line] .line-highlight[data-end]:after": {
    content: 'attr(data-end)',
    top: 'auto',
    bottom: '0.4em',
  },
});
