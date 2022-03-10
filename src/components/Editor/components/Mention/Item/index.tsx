import { Container } from './styles';

type ItemProps = {
  label: string;
};

export const Item = ({ label }: ItemProps) => {
  return (
    <Container>
      <span>{label}</span>
    </Container>
  );
};
