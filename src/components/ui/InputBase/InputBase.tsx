import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { ValidationHint } from '../ValidationHint/ValidationHint';
import clsx from 'clsx';
import styles from './InputBase.module.scss';

interface IInputBase extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | null | undefined;
  className?: string;
  icon?: ReactNode;
}

export const InputBase = forwardRef<HTMLInputElement, IInputBase>(
  ({ error, className, icon, ...props }, ref) => {
    return (
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            className={clsx(className, {
              [styles.invalid]: error,
            })}
            {...props}
          />

          {icon && <div className={styles.icon}>{icon}</div>}
        </div>
        <ValidationHint errorMsg={error as string} />
      </div>
    );
  },
);

InputBase.displayName = 'InputBase';
