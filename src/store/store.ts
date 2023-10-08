import { configureStore } from '@reduxjs/toolkit';
import { todoListSlice } from '~/features/todoList/store';

export const store = configureStore({
  devTools: true,
  reducer: {
    todoList: todoListSlice.reducer,
  },
});
