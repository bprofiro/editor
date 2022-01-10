export type PropsWithRequiredChildren<T = unknown> = T & {
  children: import('react').ReactNode;
};
