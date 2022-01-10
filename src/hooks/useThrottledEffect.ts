import { useEffect, useRef, EffectCallback, DependencyList } from 'react';

export const useThrottledEffect = (
  callback: EffectCallback,
  deps: DependencyList,
  delay: number,
) => {
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(function () {
      if (Date.now() - lastRan.current >= delay) {
        callback();
        lastRan.current = Date.now();
      }
    }, delay - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };

  }, [delay, ...deps]);
};
