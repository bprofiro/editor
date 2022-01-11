import { useEffect, useRef, EffectCallback, DependencyList } from 'react';

export const useThrottledEffect = (
  callback: EffectCallback,
  deps: DependencyList,
  delay: number,
) => {
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= delay) {
        callback();
        lastRan.current = Date.now();
      }
    }, delay - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, ...deps]);
};
