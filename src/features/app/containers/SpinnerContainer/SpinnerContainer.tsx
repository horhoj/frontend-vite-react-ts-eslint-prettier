import { useAppSelector } from '~/store/hooks';
import { Spinner } from '~/ui/Spinner';

export function SpinnerContainer() {
  const isLoading = useAppSelector(
    (state) => state.todoList.fetchTodoListRequest.isLoading,
  );

  return <Spinner isShow={isLoading} />;
}
