import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import { Portal } from '../Portal';
import styles from './Spinner.module.scss';

interface SpinnerProps {
  isShow: boolean;
}

export function Spinner({ isShow }: SpinnerProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Portal>
      <CSSTransition
        in={isShow}
        nodeRef={ref}
        timeout={300}
        unmountOnExit
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <div className={styles.Spinner} ref={ref} />
      </CSSTransition>
    </Portal>
  );
}
