import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './LocalSpinner.module.scss';

interface LocalSpinnerProps {
  children: ReactNode;
  isEffectEnabled: boolean;
}

export function LocalSpinner({ isEffectEnabled, children }: LocalSpinnerProps) {
  const rootClasses = classNames(
    styles.LocalSpinner,
    isEffectEnabled && styles.isEffectEnabled,
  );
  return <div className={rootClasses}>{children}</div>;
}
