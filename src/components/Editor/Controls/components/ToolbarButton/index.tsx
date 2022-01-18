import * as Tooltip from '@radix-ui/react-tooltip';

import { Content, Button } from './styles';

type Props = {
  children: React.ReactNode;
  isActiveFunction?: () => boolean;
  onClick?: () => void;
  tooltipContent: string;
  accessibility: {
    value: string;
    ariaLabel: string;
  };
};

export const ToolbarButton = ({
  accessibility,
  children,
  onClick,
  tooltipContent,
  isActiveFunction,
}: Props) => {
  const isActive = isActiveFunction && isActiveFunction();

  return (
    <Tooltip.Root>
      <Content sideOffset={5}>{tooltipContent}</Content>

      <Tooltip.Trigger asChild>
        <Button
          value={accessibility.value}
          aria-label={accessibility.ariaLabel}
          onClick={onClick}
          isActive={isActive}
        >
          {children}
        </Button>
      </Tooltip.Trigger>
    </Tooltip.Root>
  );
};
