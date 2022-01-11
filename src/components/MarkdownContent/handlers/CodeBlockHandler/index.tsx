import { createElement } from 'react';

import { RemirrorJSON } from '@remirror/core';
import { refractor } from 'refractor';
import { toH } from 'hast-to-hyperscript';

import { useTheme } from '~/hooks/useTheme';

import { EditorTheme } from './themes';
import { Container } from './styles';

type Props = {
  node: RemirrorJSON;
};

export const CodeBlockComponent = ({ node }: Props) => {
  const { currentTheme } = useTheme();

  const Theme = EditorTheme[currentTheme];

  const { content } = node;

  if (!content) {
    return null;
  }
  const highlightedCode = refractor.highlight(content[0].text, 'js');

  return (
    <Theme>
      <Container>
        <code
          lang={node.attrs.language as string}
          data-code-block-language={node.attrs.language as string}
        >
          {toH(createElement, highlightedCode)}
        </code>
      </Container>
    </Theme>
  );
};
