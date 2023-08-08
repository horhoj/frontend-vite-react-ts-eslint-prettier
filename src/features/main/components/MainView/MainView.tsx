import styles from './MainView.module.scss';
import supergirlImg from '~/assets/supergirl.png';

export function MainView() {
  return (
    <div className={styles.MainView}>
      <img src={supergirlImg} alt="supergirl" className={styles.img} />
    </div>
  );
}
