import { useEffect } from 'react';
import { todoListSlice } from '../../store';
import { FetchTodoListActions } from '../../types';
import { Pagination } from '../../components/Pagination';
import { TodoList } from '../../components/TodoList';
import { LocalSpinner } from '~/ui/LocalSpinner';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

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
