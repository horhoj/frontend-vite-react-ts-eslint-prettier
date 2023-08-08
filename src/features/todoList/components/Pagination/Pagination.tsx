import styles from './Pagination.module.scss';
import { FetchTodoListActions } from '~/features/todoList/types';
import { Button } from '~/ui/Button';

interface PaginationProps {
  onPaginate: (action: FetchTodoListActions) => void;
}
export function Pagination({ onPaginate }: PaginationProps) {
  return (
    <div className={styles.Pagination}>
      <Button className={styles.button} onClick={() => onPaginate('first')}>
        {'<<'}
      </Button>
      <Button className={styles.button} onClick={() => onPaginate('prev')}>
        {'<'}
      </Button>
      <Button className={styles.button} onClick={() => onPaginate('next')}>
        {'>'}
      </Button>
      <Button className={styles.button} onClick={() => onPaginate('last')}>
        {'>>'}
      </Button>
    </div>
  );
}
