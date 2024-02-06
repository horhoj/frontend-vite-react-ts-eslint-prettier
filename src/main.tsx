import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '~/styles/globalStyle.scss';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';
import { App } from './App';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
  );
}
