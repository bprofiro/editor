import { useCallback, useRef, useState } from 'react';

import Head from 'next/head';

import { Button } from '~/components/Button';
import { Editor, EditorHandles } from '~/components/Editor';
import { MarkdownContent } from '~/components/MarkdownContent';
import { EMPTY_DOC } from '~/common/placeholders/empty-doc';

import { Container, Wrapper } from './styles';

export const Home = () => {
  const editorRef = useRef<EditorHandles>(null);
  const [markdownContent, setMarkdownContent] = useState(
    JSON.stringify(EMPTY_DOC),
  );
  const [isEditorVisible, setIsEditorVisible] = useState(false);
  const [isMarkdownVisible, setIsMarkdownVisible] = useState(false);

  const handleSubmit = useCallback(() => {
    const content = JSON.stringify(editorRef.current.getState().toJSON());

    setMarkdownContent(content);
    setIsMarkdownVisible(true);
  }, []);

  return (
    <Container>
      <Head>
        <title>Editor</title>
      </Head>
      <Wrapper>
        {isEditorVisible && (
          <Editor
            ref={editorRef}
            onFocus={() => setIsMarkdownVisible(false)}
            onSubmit={handleSubmit}
          />
        )}

        <Button onClick={() => setIsEditorVisible((prevState) => !prevState)}>
          {isEditorVisible ? 'Esconder Editor' : 'Mostrar editor!'}
        </Button>
        {isMarkdownVisible && <MarkdownContent content={markdownContent} />}
      </Wrapper>
    </Container>
  );
};
