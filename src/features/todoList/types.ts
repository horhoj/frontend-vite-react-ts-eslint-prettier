export interface FetchTodoListParams {
  skip: number;
  limit: number;
}

export interface FetchTodoListResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export type FetchTodoListActions = 'first' | 'prev' | 'next' | 'last';
