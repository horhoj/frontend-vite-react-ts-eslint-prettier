import styles from './App.module.scss';
import { SettingsTestComponent } from '~/components/SettingsTestComponent';

export function App() {
  return (
    <div className={styles.App}>
      <SettingsTestComponent />
    </div>
  );
}
