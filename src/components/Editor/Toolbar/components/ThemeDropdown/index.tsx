import { useCallback } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { ThemeState } from '~/contexts/theme';
import { useTheme } from '~/hooks/useTheme';

import { ToolbarButton } from '../ToolbarButton';
import { Content, Item, Button } from './styles';

const themes = [
  'a11y_dark',
  'atom_dark',
  'base16_ateliersulphurpool_light',
  'cb',
  'darcula',
  'dracula',
  'duotone_dark',
  'duotone_earth',
  'duotone_forest',
  'duotone_sea',
  'duotone_space',
  'gh_colors',
  'hopscotch',
  'pojoaque',
  'vs',
  'wrap',
  'xonokai',
];

export const ThemeDropdown = () => {
  const { toggleTheme } = useTheme();

  const handleChangeTheme = useCallback(
    (theme: string) => {
      toggleTheme(theme as ThemeState);
    },
    [toggleTheme],
  );

  return (
    <DropdownMenu.Root>
      <Button>
        <ToolbarButton
          accessibility={{ value: 'temas', ariaLabel: 'Escolha um tema' }}
          tooltipContent="Temas"
        >
          T
        </ToolbarButton>
      </Button>

      <Content>
        {themes.map((theme) => (
          <Item key={theme} onClick={() => handleChangeTheme(theme)}>
            {theme}
          </Item>
        ))}
      </Content>
    </DropdownMenu.Root>
  );
};
