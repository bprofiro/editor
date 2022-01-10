import { useState } from 'react';

import { useThrottledEffect } from '~/hooks/useThrottledEffect';

import { MentionAtomPopupComponent, MentionAtomState } from '@remirror/react';

import { Item } from './Item';

type MentionItem = {
  id: string;
  label: string;
  link: string;
};

const users: MentionItem[] = [
  {
    id: '1',
    label: 'Brenda',
    link: 'https://github.com/bprofiro',
  },
  {
    id: '2',
    label: 'Jaqueline',
    link: 'https://www.behance.net/jaqueligonzaga3',
  },
];

const tags: MentionItem[] = [
  {
    id: '1',
    label: 'React',
    link: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    id: '2',
    label: 'NodeJS',
    link: 'https://nodejs.org/en/docs/',
  },
  {
    id: '3',
    label: 'React Native',
    link: 'https://reactnative.dev/docs/getting-started',
  },
];

export const Mention = () => {
  const [mentionState, setMentionState] = useState<MentionAtomState | null>();
  const [mentionUsers, setMentionUsers] = useState<MentionItem[]>([]);
  const [mentionTags, setMentionTags] = useState<MentionItem[]>([]);

  const mentionItems =
    (mentionState?.name === 'user' && mentionUsers) ||
    (mentionState?.name === 'tag' && mentionTags) ||
    [];

  useThrottledEffect(
    () => {
      const query = mentionState?.query.full.toLowerCase() ?? '';

      if (query.length >= 1) {
        if (mentionState.name === 'user') {
          setMentionUsers(users);
        }

        if (mentionState.name === 'tag') {
          setMentionTags(tags);
        }
      }
    },
    [mentionState],
    500,
  );

  return (
    <MentionAtomPopupComponent
      onChange={setMentionState}
      items={mentionItems}
      ItemComponent={({ item }) => <Item {...item} />}
      ZeroItemsComponent={() => <Item label="Nenhum item encontrado." />}
    />
  );
};
