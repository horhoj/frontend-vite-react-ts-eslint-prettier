import styles from './TodoList.module.scss';
import { TodoCard } from '~/features/todoList/components/TodoCard';
import { Todo } from '~/features/todoList/types';

interface TodoListProps {
  todoList: Todo[];
  numOffset: number;
}
export function TodoList({ todoList, numOffset }: TodoListProps) {
  return (
    <div className={styles.TodoList}>
      {todoList.map((todo, index) => (
        <TodoCard key={todo.id} todo={todo} num={numOffset + index + 1} />
      ))}
    </div>
  );
}
