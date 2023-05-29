import { FC } from 'react';
import styles from './MainPage.module.scss';

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = () => {
  return <div className={styles.wrap}>MainPage</div>;
};
