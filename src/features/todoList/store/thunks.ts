import { createAsyncThunk } from '@reduxjs/toolkit';
import { todoListApi } from '~/features/todoList/api';
import {
  FetchTodoListActions,
  FetchTodoListParams,
  SLICE_NAME,
} from '~/features/todoList/types';
import { RootState } from '~/store/types';

export const fetchTodoListThunk = createAsyncThunk(
  `${SLICE_NAME}/fetchTodoListThunk`,
  async (action: FetchTodoListActions | null = null, store) => {
    try {
      const params: FetchTodoListParams = {
        limit: 0,
        skip: 0,
      };
      const urlParams = new URLSearchParams(window.location.search);
      params.limit = Number.parseInt(urlParams.get('limit') ?? '10');
      params.skip = Number.parseInt(urlParams.get('skip') ?? '0');
      if (Number.isNaN(params.limit)) {
        params.limit = 10;
      }

      if (Number.isNaN(params.skip)) {
        params.skip = 0;
      }

      const total =
        (store.getState() as RootState).todoList.fetchTodoListRequest.data
          ?.total ?? 0;

      if (action === 'first') {
        params.skip = 0;
      }

      if (action === 'prev' && params.skip >= params.limit) {
        params.skip -= params.limit;
      }

      if (action === 'next' && params.skip < total - params.limit) {
        params.skip += params.limit;
      }

      if (action === 'last') {
        params.skip =
          total -
          (total % params.limit === 0 ? params.limit : total % params.limit);
      }

      const res = await todoListApi.fetchTodoList(params);

      const data: Record<string, string> = {};
      Object.keys(params).forEach((key) => {
        data[key] = String(params[key as keyof FetchTodoListParams]);
      });
      const urlSearch = new URLSearchParams(data);
      const url =
        window.location.pathname +
        (urlSearch ? `?${urlSearch}` : '') +
        window.location.hash;
      window.history.replaceState({}, '', url);

      return res;
    } catch (e) {
      return store.rejectWithValue((e as Error).message);
    }
  },
);
