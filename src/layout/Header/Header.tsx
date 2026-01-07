import { Logo } from '@/components/common/Logo/Logo'
import { Navbar } from './Navbar/Navbar'
import { ButtonLink } from '@/components/ui/ButtonLink/ButtonLink'
import { LOGIN_LINK } from '@/utils/links'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />

        <Navbar />

        <ButtonLink
          href={LOGIN_LINK}
          variant='primary'
          size='s'
          target='_blank'
          className={styles.link}
        >
          Войти
        </ButtonLink>
      </div>
    </header>
  )
}
