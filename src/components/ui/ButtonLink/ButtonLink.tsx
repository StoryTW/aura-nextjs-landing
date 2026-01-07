import { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import styles from './ButtonLink.module.scss';

type LinkType = IButtonLink & AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;

interface IButtonLink extends PropsWithChildren {
  variant?: 'primary' | 'secondary'
  size?: 's' | 'l';
}

export const ButtonLink: FC<LinkType> = ({
  children,
  variant = 'primary',
  size = 'l',
  className,
  ...props
}) => {
  return (
    <Link
      className={clsx(styles.btn, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
};
