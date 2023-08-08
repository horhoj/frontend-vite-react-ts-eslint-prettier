import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from '~/features/app/store';

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appSlice.reducer,
  },
});
