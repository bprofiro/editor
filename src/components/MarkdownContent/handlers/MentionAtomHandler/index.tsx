import { Mention } from './styles';

export const MentionAtomComponent = (props: any) => {
  console.log({ props });

  return (
    <Mention href={props.node.attrs.link} target="_blank">
      {props.node.attrs.label}
    </Mention>
  );
};
