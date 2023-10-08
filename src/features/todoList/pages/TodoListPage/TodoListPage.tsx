import { TodoListContainer } from '../../containers/TodoListContainer';
import { DefaultLayout } from '~/ui/DefaultLayout';

export function TodoListPage() {
  return (
    <DefaultLayout>
      <TodoListContainer />
    </DefaultLayout>
  );
}
