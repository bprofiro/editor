import { useMemo } from 'react';

import {
  createIFrameHandler,
  createLinkHandler,
  Doc,
  Heading,
  MarkMap,
  RemirrorRenderer,
  TextHandler,
} from '@remirror/react';

import { LinkComponent } from './handlers/LinkHandler';
import { CodeBlockComponent } from './handlers/CodeBlockHandler';
import { CodeComponent } from './handlers/CodeHandler';
import { MentionAtomComponent } from './handlers/MentionAtomHandler';
import { Markdown } from './styles';

import 'remirror/styles/all.css';

type Props = {
  content: string;
};

const typeMap: MarkMap = {
  blockquote: 'blockquote',
  bulletList: 'ul',
  doc: Doc,
  hardBreak: 'br',
  heading: Heading,
  horizontalRule: 'hr',
  iframe: createIFrameHandler(),
  image: 'img',
  listItem: 'li',
  paragraph: 'p',
  orderedList: 'ol',
  text: TextHandler,
  mentionAtom: MentionAtomComponent,
  link: LinkComponent,
  codeBlock: CodeBlockComponent,
  strike: 's',
  code: CodeComponent,
};

const markMap: MarkMap = {
  italic: 'em',
  bold: 'strong',
  code: CodeComponent,
  link: createLinkHandler({ target: '_blank' }),
  underline: 'u',
  strike: 's',
};

export const MarkdownContent = ({ content }: Props) => {
  const parsedContent = useMemo(() => JSON.parse(content), [content]);

  return (
    <Markdown>
      <RemirrorRenderer
        json={parsedContent.doc}
        typeMap={typeMap}
        markMap={markMap}
      />
    </Markdown>
  );
};
