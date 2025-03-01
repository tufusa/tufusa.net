import type { ReactNode } from 'react';
import { ScrollHide } from './ScrollHide';

export const ScrollHideHeader = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => (
  <ScrollHide
    component={(stickyClassName) => (
      <header className={`${className} ${stickyClassName}`}>{children}</header>
    )}
  />
);
