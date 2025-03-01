import { useCallback, useEffect, useState } from 'react';

type ScrollDirection = 'toEnd' | 'toStart' | 'none';

export const useScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });
  const [scrollDirection, setScrollDirection] = useState<{
    x: ScrollDirection;
    y: ScrollDirection;
  }>({ x: 'none', y: 'none' });
  const onScroll = useCallback(
    (x: number, y: number) => {
      setScroll({ x, y });
      setScrollDirection({
        x: x > scroll.x ? 'toEnd' : x < scroll.x ? 'toStart' : 'none',
        y: y > scroll.y ? 'toEnd' : y < scroll.y ? 'toStart' : 'none',
      });
    },
    [scroll],
  );

  useEffect(() => {
    const scrollListener = () => onScroll(window.scrollX, window.scrollY);

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [onScroll]);

  return { scroll, scrollDirection };
};
