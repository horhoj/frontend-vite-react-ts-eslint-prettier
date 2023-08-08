import { FC } from 'react';
import { routeList } from '~/router/routeList';

export interface RouteItem {
  id: string;
  name: string;
  path: string;
  component: FC;
}

export type RouteNameList = (typeof routeList)[number]['name'];
