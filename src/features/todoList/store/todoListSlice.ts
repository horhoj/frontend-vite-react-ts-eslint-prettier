import { createSlice } from '@reduxjs/toolkit';
import * as thunks from './thunks';

import { SLICE_NAME } from './const';
import { FetchTodoListResponse } from '~/features/todoList/types';
import {
  RequestList,
  RequestStateProperty,
  makeRequestExtraReducer,
  makeRequestStateProperty,
} from '~/store/helpers';

export interface IS {
  fetchTodoListRequest: RequestStateProperty<FetchTodoListResponse, string>;
  test: boolean;
}

const initialState: IS = {
  fetchTodoListRequest: makeRequestStateProperty<
    FetchTodoListResponse,
    string
  >(),
  test: false,
};

export const { actions, reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    clear: () => initialState,
  },
  extraReducers: (builder) => {
    makeRequestExtraReducer<RequestList<IS>>(
      builder,
      thunks.fetchTodoListThunk,
      'fetchTodoListRequest',
    );
  },
});
