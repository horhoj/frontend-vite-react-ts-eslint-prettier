import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from './app';

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appSlice.reducer,
  },
});
