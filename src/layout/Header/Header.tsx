import { Logo } from '@/components/common/Logo/Logo'
import styles from './Header.module.scss'
import { Button } from '@/components/ui/Button/Button'
import { Navbar } from './Navbar/Navbar'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />

        <Navbar />

        <Button variant='primary' size='s' className={styles.btn}>
          Войти
        </Button>
      </div>
    </header>
  )
}
