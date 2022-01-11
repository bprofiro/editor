import { useRemirrorContext } from '@remirror/react';

import { Button } from '../../Button';
import { Container, Left, Right } from './styles';

type Props = {
  onSubmit: () => void;
};

export const Controls = ({ onSubmit }: Props) => {
  const { chain } = useRemirrorContext();

  const handleBold = () => {
    chain.toggleBold().focus('end').run();
  };

  const handleItalic = () => {
    chain.toggleItalic().focus('end').run();
  };

  const handleStrike = () => {
    chain.toggleStrike().focus('end').run();
  };

  const handleCode = () => {
    chain.toggleCode().focus('end').run();
  };

  const handleCallout = () => {
    chain.toggleBlockquote().focus('end').run();
  };

  const handleCodeBlock = () => {
    chain.toggleCodeBlock({ language: 'jsx' }).focus('end').run();
  };

  return (
    <Container>
      <Left>
        <button type="button" onClick={handleBold}>
          B
        </button>
        <button type="button" onClick={handleItalic}>
          <i>I</i>
        </button>
        <button type="button" onClick={handleStrike}>
          <s>S</s>
        </button>
        <button type="button" onClick={handleCode}>{`< >`}</button>
        <button type="button" onClick={handleCallout}>
          &quot;
        </button>
        <button type="button" onClick={handleCodeBlock}>{`{ }`}</button>
      </Left>

      <Right>
        <Button onClick={onSubmit}>Ver esboço</Button>
      </Right>
    </Container>
  );
};
