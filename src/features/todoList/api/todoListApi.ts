import axios, { AxiosRequestConfig } from 'axios';
import { DEFAULT_HEADERS } from '~/config/api';
import {
  FetchTodoListParams,
  FetchTodoListResponse,
} from '~/features/todoList/types';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: { ...DEFAULT_HEADERS },
});

export const fetchTodoList = async (params: FetchTodoListParams) => {
  const config: AxiosRequestConfig = {
    url: '/todos',
    params,
  };

  return (await axiosInstance.request<FetchTodoListResponse>(config)).data;
};
