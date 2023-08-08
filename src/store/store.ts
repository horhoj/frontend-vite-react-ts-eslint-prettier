import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from '~/features/app/store';
import { todoListSlice } from '~/features/todoList/store';

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});
