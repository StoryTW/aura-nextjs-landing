import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'

type TButton = TButtonProps & PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

type TButtonProps = {
  size?: 's' | 'l';
  variant?: 'primary' | 'secondary'
}

export const Button: FC<TButton> = ({
  children,
  className,
  variant = 'primary',
  size = 'l',
  ...props
}) => {
  return (
    <button
      className={clsx(styles.btn, styles[variant], styles[size], className)}
      type='button'
      {...props}
    >
      {children}
    </button>
  )
}
