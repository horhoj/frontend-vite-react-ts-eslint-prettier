import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { Router } from '~/router/router';
import { Spinner } from '~/components/Spinner';

export const App: React.FC = () => {
  const [isSpinnerShow, setIsSpinnerShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSpinnerShow(false);
    }, 300);
  }, []);

  return (
    <>
      {isSpinnerShow && <Spinner />}
      <div className={styles.wrap}>
        <Router />
      </div>
    </>
  );
};
