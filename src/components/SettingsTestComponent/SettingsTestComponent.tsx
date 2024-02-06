import styles from './SettingsTestComponent.module.scss';
import { DevView } from '~/ui/DevView';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { Button } from '~/ui/Button';
import { settingsSlice } from '~/store/settingsSlice';

export function SettingsTestComponent() {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings);

  const handleTestBtnClk = () => {
    dispatch(settingsSlice.actions.testParamToggle());
  };

  return (
    <div className={styles.SettingsTestComponent}>
      <div>
        <DevView data={settings} />
      </div>
      <div>
        <Button onClick={handleTestBtnClk}>test</Button>
      </div>
    </div>
  );
}
