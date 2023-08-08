import { AppNavData } from '~/features/appNav/appNavData';
import { AppNavLink } from '~/features/appNav/components/AppNavLink';
import { AppNavWrapper } from '~/features/appNav/components/AppNavWrapper';

export function AppNavContainer() {
  return (
    <AppNavWrapper>
      {AppNavData.map((el) => (
        <AppNavLink key={el.id} path={el.path} text={el.text} />
      ))}
    </AppNavWrapper>
  );
}
