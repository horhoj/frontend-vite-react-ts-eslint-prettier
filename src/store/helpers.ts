import { ActionReducerMapBuilder, AsyncThunk, Draft } from '@reduxjs/toolkit';

export interface RequestStateProperty<T = unknown, E = unknown> {
  data: T | null;
  error: E | null;
  isLoading: boolean;
}

export const makeRequestStateProperty = <T, E>(
  initialValues: Partial<RequestStateProperty<T, E>> = {},
): RequestStateProperty<T, E> => ({
  data: null,
  error: null,
  isLoading: false,
  ...initialValues,
});

export type RequestList<I> = {
  [K in keyof I as I[K] extends RequestStateProperty ? K : never]: I[K];
};

export const makeRequestExtraReducer = <IS extends Record<string, RequestStateProperty>>(
  builder: ActionReducerMapBuilder<IS>,
  asyncThunk: AsyncThunk<keyof Draft<IS>, any, any>,
  requestPropertyName: keyof Draft<IS>,
): void => {
  builder
    .addCase(asyncThunk.pending, (state) => {
      state[requestPropertyName].isLoading = true;
      state[requestPropertyName].error = null;
    })
    .addCase(asyncThunk.fulfilled, (state, action) => {
      state[requestPropertyName].isLoading = false;
      state[requestPropertyName].data = action.payload;
    })
    .addCase(asyncThunk.rejected, (state, action) => {
      state[requestPropertyName].isLoading = false;
      state[requestPropertyName].data = null;
      state[requestPropertyName].error = action.payload || action.error;
    });
};
