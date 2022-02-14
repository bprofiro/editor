import { useCallback } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/router';

import { ThemeState } from '~/contexts/theme';
import { useTheme } from '~/hooks/useTheme';
import { Button } from '~/components/Button';

import { Content, Item, DropdownMenuTrigger } from './styles';

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
  const { toggleTheme, currentTheme } = useTheme();
  const router = useRouter();

  const handleChangeTheme = useCallback(
    (theme: string) => {
      toggleTheme(theme as ThemeState);
      // router.push('/editor');
    },
    [toggleTheme, router],
  );

  console.log({ currentTheme });

  return (
    <DropdownMenu.Root>
      <DropdownMenuTrigger>Temas</DropdownMenuTrigger>

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
