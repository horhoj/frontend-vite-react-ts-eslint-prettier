import React, { ReactNode } from 'react';

import styles from './DefaultLayout.module.scss';

export interface DefaultLayoutProps {
  children?: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return <div className={styles.DefaultLayout}>{children}</div>;
}
