import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: JSX.Element | string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    const classList = className ? className : styles.wrap;

    return (
      <button {...props} className={classList} ref={ref}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
