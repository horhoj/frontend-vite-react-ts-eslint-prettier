import { MainPage } from '~/features/main/pages/MainPage';
import { Page404 } from '~/features/app/pages/Error404Page';
import { RouteItem } from '~/router/types';
import { getUUID } from '~/utils/getUUID';

export const routeList = [
  {
    id: getUUID(),
    name: 'main',
    path: '/main',
    component: MainPage,
  },
  {
    id: getUUID(),
    name: 'error404',
    path: '*',
    component: Page404,
  },
] as const satisfies readonly RouteItem[];
