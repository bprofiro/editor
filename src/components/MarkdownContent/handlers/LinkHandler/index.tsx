import { RemirrorJSON } from 'remirror';

import { Link } from './styles';

type Props = {
  node: RemirrorJSON;
};

export const LinkComponent = ({ node }: Props) => {
  return <Link href={node.text}>{node.text}</Link>;
};
