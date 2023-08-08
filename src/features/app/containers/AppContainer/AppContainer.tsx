import { DefaultLayout } from '~/ui/DefaultLayout';
import { Router } from '~/router';
import { SpinnerContainer } from '~/features/app/containers/SpinnerContainer';
import { AppNavContainer } from '~/features/appNav/containers/AppNavContainer';

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
