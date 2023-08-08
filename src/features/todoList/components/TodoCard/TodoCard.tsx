import styles from './TodoCard.module.scss';
import { Todo } from '~/features/todoList/types';

interface TodoCardProps {
  todo: Todo;
  num: number;
}
export function TodoCard({ todo, num }: TodoCardProps) {
  return (
    <div className={styles.TodoCard}>
      <div>
        № {num}, id: {todo.id}, userId:{todo.userId}
      </div>
      <div>{todo.todo}</div>
      <div></div>
    </div>
  );
}
