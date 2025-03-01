import { type ReactNode } from 'react';
import { useScroll } from '../hooks/useScroll';

export const ScrollHide = ({
  component,
}: {
  component: (stickyClassName: string) => ReactNode;
}) => {
  const { scrollDirection } = useScroll();

  return component(scrollDirection.y == 'toEnd' ? '-translate-y-full' : '');
};
