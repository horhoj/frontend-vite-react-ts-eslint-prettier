import { AxiosResponse, AxiosError } from 'axios';
import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';

export interface RequestError {
  responseData: AxiosResponse | null;
  errorMsg: string;
}

export interface RequestSliceStateProperty<T = unknown> {
  data: T | null;
  error: RequestError | null;
  isLoading: boolean;
}

export const getRequestErrorData = (
  e: unknown,
  payload: unknown,
): RequestError => {
  const payloadMsg = String(payload);
  return {
    responseData: (e as AxiosError)?.response || null,
    errorMsg: payload ? payloadMsg : (e as Error)?.message,
  };
};

export const makeRequestSliceStateProperty = <T>(
  initialValues: Partial<RequestSliceStateProperty<T>> = {},
): RequestSliceStateProperty<T> => ({
  data: null,
  error: null,
  isLoading: false,
  ...initialValues,
});

export const makeRequestCaseToBuilder = <IS>(
  builder: ActionReducerMapBuilder<any>,
  asyncThunk: AsyncThunk<any, any, any>,
  requestPropertyName: keyof IS,
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
    .addCase(asyncThunk.rejected, (state, { error, payload }) => {
      state[requestPropertyName].isLoading = false;
      state[requestPropertyName].data = null;
      state[requestPropertyName].error = getRequestErrorData(error, payload);
    });
};
