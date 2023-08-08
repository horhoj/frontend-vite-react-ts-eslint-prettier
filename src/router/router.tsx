import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routeList } from './routeList';
import { getRoutePath } from './helpers';
import { RedirectExecutor } from './RedirectExecutor';
import { getUUID } from '~/utils/getUUID';

const MAIN_UNIQ_KEY = getUUID();

export const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={getRoutePath('main')} />}
          key={MAIN_UNIQ_KEY}
        />
        {routeList.map((route) => {
          return (
            <Route
              path={route.path}
              key={route.id}
              element={<route.component />}
            />
          );
        })}
      </Routes>
      <RedirectExecutor />
    </>
  );
};
