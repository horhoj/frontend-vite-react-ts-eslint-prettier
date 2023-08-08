import styles from './Spinner.module.scss';
import { Portal } from '~/ui/Portal';

export function Spinner() {
  return (
    <Portal>
      <div className={styles.Spinner} />
    </Portal>
  );
}
