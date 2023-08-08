import { ReactNode } from 'react';
import styles from './AppNavWrapper.module.scss';

interface AppNavWrapperProps {
  children: ReactNode;
}
export function AppNavWrapper({ children }: AppNavWrapperProps) {
  return <div className={styles.AppNavWrapper}>{children}</div>;
}
