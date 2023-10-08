import { ReactNode, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export function Modal({ children, isOpen, onClose }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.hideOverflow);
      return;
    }
    document.body.classList.remove(styles.hideOverflow);
  }, [isOpen]);

  return (
    <Portal>
      <CSSTransition
        in={isOpen}
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
        <div className={styles.Modal} onClick={onClose} ref={ref}>
          {children}
        </div>
      </CSSTransition>
    </Portal>
  );
}
