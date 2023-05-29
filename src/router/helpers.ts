import { generatePath } from 'react-router-dom';
import { routeList, RouteNameList } from './routeList';

export const getRoutePath = (
  routeName: RouteNameList,
  id: string | null = null,
): string => {
  const path = routeList[routeName].path;

  if (!id) {
    return path;
  }

  return generatePath(path, { id });
};
