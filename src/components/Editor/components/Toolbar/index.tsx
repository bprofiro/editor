import { useActive, useRemirrorContext } from '@remirror/react';

import { Button } from '~/components/Button';

import { ToolbarButton } from './components/ToolbarButton';
import { Container, Left, Right } from './styles';

type Props = {
  onSubmit: () => void;
};

export const Toolbar = ({ onSubmit }: Props) => {
  const { chain } = useRemirrorContext();
  const { bold, italic, strike, code, callout, codeBlock } = useActive();

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
        <ToolbarButton
          accessibility={{ value: 'negrito', ariaLabel: 'Texto em negrito' }}
          onClick={handleBold}
          tooltipContent="Negrito"
          isActiveFunction={bold}
        >
          B
        </ToolbarButton>
        <ToolbarButton
          accessibility={{ value: 'italic', ariaLabel: 'Texto em Italico' }}
          onClick={handleItalic}
          tooltipContent="Italico"
          isActiveFunction={italic}
        >
          <i>I</i>
        </ToolbarButton>
        <ToolbarButton
          accessibility={{ value: 'strike', ariaLabel: 'Texto em Strike' }}
          onClick={handleStrike}
          tooltipContent="Strike"
          isActiveFunction={strike}
        >
          <s>S</s>
        </ToolbarButton>
        <ToolbarButton
          accessibility={{ value: 'code', ariaLabel: 'Texto em code' }}
          onClick={handleCode}
          tooltipContent="Code"
          isActiveFunction={code}
        >
          {`</>`}
        </ToolbarButton>
        <ToolbarButton
          accessibility={{ value: 'callout', ariaLabel: 'Fazer um callout' }}
          onClick={handleCallout}
          tooltipContent="Callout"
          isActiveFunction={callout}
        >
          &quot;
        </ToolbarButton>
        <ToolbarButton
          accessibility={{ value: 'codeblock', ariaLabel: 'Bloco de c??digo' }}
          onClick={handleCodeBlock}
          tooltipContent="Bloco de c??digo"
          isActiveFunction={codeBlock}
        >
          {`{ }`}
        </ToolbarButton>
      </Left>

      <Right>
        <Button onClick={onSubmit}>Ver esbo??o</Button>
      </Right>
    </Container>
  );
};
