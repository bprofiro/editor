import { Code } from './styles';

type Props = {
  children: React.ReactNode;
};

export const CodeComponent = ({ children }: Props) => {
  return <Code>{children}</Code>;
};
