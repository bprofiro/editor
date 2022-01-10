import { RemirrorJSON } from 'remirror';

import { Link } from './styles';

type Props = {
  node: RemirrorJSON;
};

export const LinkComponent = ({ node }: Props) => {
  return <Link>{node.text}</Link>;
};
