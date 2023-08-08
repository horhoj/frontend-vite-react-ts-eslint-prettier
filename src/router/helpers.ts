import { generatePath } from 'react-router-dom';
import { routeList } from './routeList';
import { RouteNameList } from '~/router/types';

export const getRoutePath = (
  routeName: RouteNameList,
  id: string | null = null,
): string => {
  const route = routeList.find((item) => item.name === routeName);

  if (!id) {
    return route?.path ?? '';
  }

  const path = route?.path ?? '';

  return generatePath(String(path), { id });
};
