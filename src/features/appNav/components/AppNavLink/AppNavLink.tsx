import { NavLink } from 'react-router-dom';
import styles from './AppNavLink.module.scss';

interface NavLinkProps {
  text: string;
  path: string;
}

export function AppNavLink({ path, text }: NavLinkProps) {
  return (
    <NavLink className={styles.AppNavLink} to={path}>
      {text}
    </NavLink>
  );
}
