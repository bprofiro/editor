import { RemirrorJSON } from 'remirror';

import { Mention } from './styles';

type Props = {
  node: RemirrorJSON;
};

export const MentionAtomComponent = ({ node }: Props) => {
  return (
    <Mention href={node.attrs.link as string} target="_blank">
      {node.attrs.label as string}
    </Mention>
  );
};
