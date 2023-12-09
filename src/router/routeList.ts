import { RouteItem } from './types';
import { Page404 } from '~/app/pages/Error404Page';
import { AboutPage } from '~/features/about/pages/AboutPage';
import { MainPage } from '~/features/main/pages/MainPage';
import { getUUID } from '~/utils/getUUID';

export const routeList = [
  {
    id: getUUID(),
    name: 'main',
    path: '/main',
    component: MainPage,
    inMenu: true,
  },
  {
    id: getUUID(),
    name: 'about',
    component: AboutPage,
    inMenu: true,
    path: '/about',
  },
  {
    id: getUUID(),
    name: 'error404',
    path: '*',
    component: Page404,
    inMenu: false,
  },
] as const satisfies readonly RouteItem[];
