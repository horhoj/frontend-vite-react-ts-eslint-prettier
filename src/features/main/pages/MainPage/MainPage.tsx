import { MainView } from '~/features/main/components/MainView';
import { DefaultLayout } from '~/ui/DefaultLayout';

export function MainPage() {
  return (
    <DefaultLayout>
      <MainView />
    </DefaultLayout>
  );
}
