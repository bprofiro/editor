const baseColors = {
  'rocketseat-light': '#996DFF',
  'rocketseat-mid': '#8257E5',
  'rocketseat-dark': '#633BBC',
  'rocketseat-low': '#271A45',

  'discover-light': '#6A80FF',
  'discover-mid': '#4863F7',
  'discover-dark': '#3249CB',
  'discover-low': '#182049',

  'ignite-light': '#00B37E',
  'ignite-mid': '#00875F',
  'ignite-dark': '#015F43',
  'ignite-low': '#00291D',

  'ec-light': '#FC4737',
  'ec-mid': '#D73628',
  'ec-dark': '#AD1E12',
  'ec-low': '#42110D',

  'success-light': '#04D361',
  'success-base': '#1B873F',
  'success-low': '#051B0D',

  'danger-light': '#F75A68',
  'danger-base': '#CC2937',
  'danger-low': '#2D090C',

  'warning-light': '#FBA94C',
  'warning-base': '#EB8A1D',
  'warning-low': '#2E1B06',

  'new-light': '#F7E55A',
  'new-base': '#EBD62F',
  'new-low': '#2D2909',

  white: '#FFFFFF',
  black: '#000000',

  'grey-100': '#E1E1E6',
  'grey-200': '#C4C4CC',
  'grey-300': '#8D8D99',
  'grey-400': '#7C7C8A',
  'grey-500': '#505059',
  'grey-600': '#323238',
  'grey-700': '#29292E',
  'grey-800': '#202024',
  'grey-900': '#121214',
  'grey-950': '#09090A',
};

const aliases = {
  'text-title': baseColors['grey-100'],
  'text-base': baseColors['grey-200'],
  'text-support': baseColors['grey-300'],
  placeholder: baseColors['grey-400'],
  'inputs-icons': baseColors['grey-500'],
  'shape-tertiary': baseColors['grey-600'],
  'shape-secondary': baseColors['grey-700'],
  'shape-primary': baseColors['grey-800'],
  'color-background': baseColors['grey-900'],
};

export const colors = { ...baseColors, ...aliases };