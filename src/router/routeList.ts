import { RouteItem } from './types';
import { Page404 } from '~/app/pages/Error404Page';
import { MainPage } from '~/app/pages/MainPage';
import { TodoListPage } from '~/features/todoList/pages/TodoListPage';
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
    name: 'todoList',
    path: '/todo-list',
    component: TodoListPage,
    inMenu: true,
  },
  {
    id: getUUID(),
    name: 'error404',
    path: '*',
    component: Page404,
    inMenu: false,
  },
] as const satisfies readonly RouteItem[];
