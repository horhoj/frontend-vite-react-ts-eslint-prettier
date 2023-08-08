import { useEffect } from 'react';
import { Pagination } from '~/features/todoList/components/Pagination';
import { TodoList } from '~/features/todoList/components/TodoList';
import { todoListSlice } from '~/features/todoList/store';
import { FetchTodoListActions } from '~/features/todoList/types';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { LocalSpinner } from '~/ui/LocalSpinner';

export function TodoListContainer() {
  const dispatch = useAppDispatch();
  const fetchTodoListRequest = useAppSelector(
    (state) => state.todoList.fetchTodoListRequest,
  );

  useEffect(() => {
    dispatch(todoListSlice.thunks.fetchTodoListThunk(null));
  }, []);

  useEffect(() => {
    console.log('fetchTodoListRequest.error', fetchTodoListRequest.error);
  }, [fetchTodoListRequest.error]);

  const onPaginateHandler = (action: FetchTodoListActions) => {
    dispatch(todoListSlice.thunks.fetchTodoListThunk(action));
  };

  return (
    <>
      {fetchTodoListRequest.data && (
        <LocalSpinner isEffectEnabled={fetchTodoListRequest.isLoading}>
          <Pagination onPaginate={onPaginateHandler} />
          <TodoList
            todoList={fetchTodoListRequest.data.todos}
            numOffset={fetchTodoListRequest.data.skip}
          />
        </LocalSpinner>
      )}
    </>
  );
}
