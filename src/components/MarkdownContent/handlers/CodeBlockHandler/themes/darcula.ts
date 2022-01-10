import { styled } from '~/styles';

export const Darcula = styled('div', {
  background: '#2b2b2b',
  borderRadius: '$sm',
  margin: '$4 0',
  padding: '$3',

  "code[class*='language-'], pre[class*='language-']": {
    color: '#a9b7c6',
    fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    lineHeight: '1.5',
    tabSize: '4',
    hyphens: 'none',
  },

  "pre[class*='language-']::-moz-selection, pre[class*='language-'] ::-moz-selection, code[class*='language-']::-moz-selection, code[class*='language-'] ::-moz-selection": {
    color: 'inherit',
    background: 'rgba(33, 66, 131, 0.85)',
  },

  "pre[class*='language-']::selection, pre[class*='language-'] ::selection, code[class*='language-']::selection, code[class*='language-'] ::selection": {
    color: 'inherit',
    background: 'rgba(33, 66, 131, 0.85)',
  },

  "pre[class*='language-']": {
    padding: '1em',
    margin: '0.5em 0',
    overflow: 'auto',
  },

  ":not(pre) > code[class*='language-'], pre[class*='language-']": {
    background: '#2b2b2b',
  },

  ":not(pre) > code[class*='language-']": {
    padding: '0.1em',
    borderRadius: '0.3em',
  },

  '.token.comment, .token.prolog, .token.cdata': {
    color: '#808080',
  },

  '.token.delimiter, .token.boolean, .token.keyword, .token.selector, .token.important, .token.atrule': {
    color: '#cc7832',
  },

  '.token.operator, .token.punctuation, .token.attr-name': {
    color: '#a9b7c6',
  },

  '.token.tag, .token.tag .punctuation, .token.doctype, .token.builtin': {
    color: '#e8bf6a',
  },

  '.token.entity, .token.number, .token.symbol': {
    color: '#6897bb',
  },

  '.token.property, .token.constant, .token.variable': {
    color: '#9876aa',
  },

  '.token.string, .token.char':{
    color: '#6a8759',
  },

  '.token.attr-value, .token.attr-value .punctuation': {
    color: '#a5c261',
  },

  '.token.attr-value .punctuation:first-of-type': {
    color: '#a9b7c6',
  },

  '.token.url': {
    color: '#287bde',
    textDecoration: 'underline',
  },

  '.token.function': {
    color: '#ffc66d',
  },

  '.token.regex': {
    background: '#364135',
  },

  '.token.bold': {
    fontWeight: 'bold',
  },

  '.token.italic': {
    fontStyle: 'italic',
  },

  '.token.inserted': {
    background: '#294436',
  },

  '.token.deleted': {
    background: '#484a4a',
  },

  'code.language-css .token.property, code.language-css .token.property + .token.punctuation, .token.punctuation.important': {
    color: '#a9b7c6',
  },

  'code.language-css .token.id': {
    color: '#ffc66d',
  },

  'code.language-css .token.selector > .token.class, code.language-css .token.selector > .token.attribute, code.language-css .token.selector > .token.pseudo-class, code.language-css .token.selector > .token.pseudo-element': {
    color: '#ffc66d',
  },
});
