import { Button } from '../../Button';
import { Container, Left, Right } from './styles';
import { useCommands, useRemirrorContext } from '@remirror/react';
import { useTheme } from '../../../hooks/useTheme';

type Props = {
  onSubmit: () => void;
};

export const Controls = ({ onSubmit }: Props) => {
  const { chain } = useRemirrorContext();
  const { toggleTheme } = useTheme();

  const handleBold = () => {
    chain.toggleBold().focus('end').run();
  };

  const handleTheme = () => {
    toggleTheme('a11y_dark');
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
        <button onClick={handleBold}>B</button>
        <button onClick={handleItalic}>
          <i>I</i>
        </button>
        <button onClick={handleStrike}>
          <s>S</s>
        </button>
        <button onClick={handleCode}>{`< >`}</button>
        <button onClick={handleCallout}>{`"`}</button>
        <button onClick={handleCodeBlock}>{`{ }`}</button>
      </Left>

      <Right>
        <Button onClick={onSubmit}>Ver esboço</Button>
      </Right>
    </Container>
  );
};
