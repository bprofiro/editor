import { RemirrorJSON } from '@remirror/core';
import { MarkMap, TextHandler } from '@remirror/react';
import { createElement } from 'react';
import { refractor } from 'refractor';
import { toH } from 'hast-to-hyperscript';
import { EditorTheme } from './themes';
import { Container } from './styles';
import { useTheme } from '../../../../hooks/useTheme';

type Props = {
  node: RemirrorJSON;
  markMap: MarkMap;
};

export const CodeBlockComponent = (props: Props) => {
  const { currentTheme } = useTheme();

  const Theme = EditorTheme[currentTheme];

  const content = props.node.content;

  if (!content) {
    return null;
  }
  const highlightedCode = refractor.highlight(content[0].text, 'js');

  console.log({ currentTheme });

  return (
    <Theme>
      <Container>
        <code
          lang={props.node.attrs.language as string}
          data-code-block-language={props.node.attrs.language as string}
        >
          {toH(createElement, highlightedCode)}
        </code>
      </Container>
    </Theme>
  );
};
