import { DefaultLayout } from '~/ui/DefaultLayout';
import { Router } from '~/router';

export function AppContainer() {
  return (
    <DefaultLayout>
      <Router />
    </DefaultLayout>
  );
}
