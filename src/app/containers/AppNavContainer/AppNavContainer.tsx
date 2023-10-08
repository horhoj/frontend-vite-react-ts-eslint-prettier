import { AppNavWrapper } from '../../components/AppNavWrapper';
import { AppNavLink } from '../../components/AppNavLink';
import { routeList } from '~/router';

export function AppNavContainer() {
  return (
    <AppNavWrapper>
      {routeList
        .filter((el) => el.inMenu)
        .map((el) => (
          <AppNavLink key={el.id} path={el.path} text={el.name} />
        ))}
    </AppNavWrapper>
  );
}
