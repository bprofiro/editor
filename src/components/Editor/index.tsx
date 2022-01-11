import { forwardRef, useCallback, useImperativeHandle } from 'react';

import {
  MentionAtomExtension,
  BlockquoteExtension,
  BoldExtension,
  CodeBlockExtension,
  CodeExtension,
  HardBreakExtension,
  HeadingExtension,
  ItalicExtension,
  LinkExtension,
  MarkdownExtension,
  PlaceholderExtension,
  StrikeExtension,
} from 'remirror/extensions';
import {
  EditorComponent,
  ReactExtensions,
  ReactFrameworkOutput,
  Remirror,
  useRemirror,
} from '@remirror/react';

import { EMPTY_DOC } from '~/common/placeholders/empty-doc';
import { getEditorLanguages } from '~/utils/get-editor-languages';
import { useTheme } from '~/hooks/useTheme';

import { Mention } from './Mention';
import { Controls } from './Controls';
import { Container } from './styles';
import 'remirror/styles/all.css';

type Props = {
  onSubmit: () => void;
  initialContent?: typeof EMPTY_DOC;
};

export type EditorHandles = ReactFrameworkOutput<
  ReactExtensions<
    | LinkExtension
    | MentionAtomExtension
    | CodeBlockExtension
    | HardBreakExtension
    | PlaceholderExtension
    | BoldExtension
    | StrikeExtension
    | ItalicExtension
    | HeadingExtension
    | BlockquoteExtension
    | CodeExtension
    | MarkdownExtension
  >
> & {
  clearState: () => void;
};

export const Editor = forwardRef<EditorHandles, Props>(
  ({ onSubmit, initialContent }, ref) => {
    const { currentTheme } = useTheme();

    const extensions = useCallback(
      () => [
        new LinkExtension({ autoLink: true, defaultTarget: '_blank' }),
        new PlaceholderExtension({ placeholder: 'Digite alguma coisa!' }),
        new BoldExtension({}),
        new StrikeExtension(),
        new ItalicExtension(),
        new HeadingExtension({ defaultLevel: 5 }),
        new BlockquoteExtension(),
        new CodeExtension(),
        new MarkdownExtension({ copyAsMarkdown: false }),
        new HardBreakExtension(),
        new MentionAtomExtension({
          extraAttributes: {
            link: {
              default: (node) => node.attrs.link,
            },
          },
          matchers: [
            { name: 'user', char: '@', appendText: ' ', matchOffset: 0 },
            { name: 'tag', char: '#', appendText: ' ', matchOffset: 0 },
          ],
        }),
        new CodeBlockExtension({
          supportedLanguages: getEditorLanguages(),
          defaultLanguage: 'javascript',
          syntaxTheme: currentTheme,
        }),
      ],
      [currentTheme],
    );

    const { manager, getContext } = useRemirror({
      extensions,
      stringHandler: 'html',
    });

    useImperativeHandle(
      ref,

      () => ({
        ...getContext(),
        clearState: () => {
          manager.view.updateState(
            manager.createState({ content: EMPTY_DOC.doc }),
          );
        },
      }),
      [manager, getContext],
    );

    return (
      <Container className="remirror-theme">
        <Remirror
          manager={manager}
          initialContent={initialContent?.doc || EMPTY_DOC.doc}
        >
          <EditorComponent />
          <Mention />
          <Controls onSubmit={onSubmit} />
        </Remirror>
      </Container>
    );
  },
);
