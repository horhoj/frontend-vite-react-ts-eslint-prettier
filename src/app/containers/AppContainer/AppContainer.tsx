import { SpinnerContainer } from '../SpinnerContainer';
import { AppNavContainer } from '../AppNavContainer';
import { Router } from '~/router';
import { DefaultLayout } from '~/ui/DefaultLayout';

export function AppContainer() {
  return (
    <>
      <SpinnerContainer />
      <AppNavContainer />
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </>
  );
}
