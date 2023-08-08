import React, { FC } from 'react';
import styles from './Spinner.module.scss';
import { Portal } from '~/components/Portal';

export const Spinner: FC = () => {
  return (
    <Portal>
      <div className={styles.Spinner} />
    </Portal>
  );
};
