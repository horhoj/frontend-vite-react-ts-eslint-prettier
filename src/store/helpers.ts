import { ActionReducerMapBuilder, AsyncThunk, Draft } from '@reduxjs/toolkit';

export interface RequestSliceStateProperty<T = unknown, E = unknown> {
  data: T | null;
  error: E | null;
  isLoading: boolean;
}

export const makeRequestSliceStateProperty = <T>(
  initialValues: Partial<RequestSliceStateProperty<T>> = {},
): RequestSliceStateProperty<T> => ({
  data: null,
  error: null,
  isLoading: false,
  ...initialValues,
});

type RequestSliceStatePropertyList<IS> = {
  [K in keyof IS as IS[K] extends RequestSliceStateProperty ? K : never]: IS[K];
};

export const makeRequestCaseToBuilder = <IS>(
  // builder: ActionReducerMapBuilder<RequestSliceStatePropertyList<IS>>,
  builder: ActionReducerMapBuilder<any>,
  asyncThunk: AsyncThunk<any, any, any>,
  requestPropertyName: keyof Draft<RequestSliceStatePropertyList<IS>>,
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
