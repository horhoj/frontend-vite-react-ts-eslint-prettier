import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

export const Portal: FC<{ children?: ReactNode }> = ({ children }) =>
  createPortal(<>{children}</>, document.body);
