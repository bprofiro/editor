import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, onClick }: Props) => {
  return <Container onClick={onClick}>{children}</Container>;
};
