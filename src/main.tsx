import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { IS_REACT_STRICT_MODE } from '~/config/app';
import { store } from '~/store/store';
import '~/styles/index.scss';

const ReactStrictModeWrapper: FC<{
  isStrictModeEnable: boolean;
  children?: React.ReactNode;
}> = ({ children, isStrictModeEnable }) => {
  return (
    <>
      {isStrictModeEnable ? (
        <React.StrictMode>{children}</React.StrictMode>
      ) : (
        children
      )}
    </>
  );
};

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <ReactStrictModeWrapper isStrictModeEnable={IS_REACT_STRICT_MODE}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ReactStrictModeWrapper>,
  );
}
