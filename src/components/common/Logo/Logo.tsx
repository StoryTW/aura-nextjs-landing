import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Logo.module.scss'

interface ILogo {
  withText?: boolean;
}

export const Logo: FC<ILogo> = ({ withText = false }) => {
  return (
    <Link href={'/'} className={styles.logo}>
      <Image
        src={'/images/logo.svg'}
        alt='logo'
        width={69}
        height={69}
      />

      {withText && (
        <div className={styles.text}>
          AURA
        </div>
      )}
    </Link>
  )
}
