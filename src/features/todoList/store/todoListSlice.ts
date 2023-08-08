import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import * as thunks from './thunks';
import {
  makeRequestCaseToBuilder,
  makeRequestSliceStateProperty,
} from '~/store/helpers';
import {
  SLICE_NAME,
  TodoListSliceInitialState,
} from '~/features/todoList/types';

const initialState: TodoListSliceInitialState = {
  fetchTodoListRequest: makeRequestSliceStateProperty(),
};

export const { actions, reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    clear: () => initialState,
  },
  extraReducers: (builder) => {
    makeRequestCaseToBuilder<TodoListSliceInitialState>(
      builder,
      thunks.fetchTodoListThunk,
      'fetchTodoListRequest',
    );
  },
});
