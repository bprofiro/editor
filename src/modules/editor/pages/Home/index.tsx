import { useCallback, useRef, useState } from 'react';
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

  const handleSubmit = useCallback(() => {
    const content = JSON.stringify(editorRef.current.getState().toJSON());

    setMarkdownContent(content);
  }, []);

  return (
    <Container>
      <Wrapper>
        {isEditorVisible && <Editor ref={editorRef} onSubmit={handleSubmit} />}

        <Button onClick={() => setIsEditorVisible((prevState) => !prevState)}>
          {isEditorVisible ? 'Esconder Editor' : 'Mostrar editor!'}
        </Button>
        <MarkdownContent content={markdownContent} />
      </Wrapper>
    </Container>
  );
};
