import { AppNavItem } from '~/features/appNav/types';
import { getRoutePath } from '~/router';
import { getUUID } from '~/utils/getUUID';

export const AppNavData: AppNavItem[] = [
  {
    id: getUUID(),
    path: getRoutePath('main'),
    text: 'main',
  },

  {
    id: getUUID(),
    path: getRoutePath('todoList'),
    text: 'todoList',
  },
];
