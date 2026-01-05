import clsx from 'clsx'
import styles from './Footer.module.scss'
import { Logo } from '@/components/common/Logo/Logo'
import Link from 'next/link'

const LINKS = [
  {
    name: 'Публичная оферта'
  },
  {
    name: 'Политика конфиденциальности'
  },
  {
    name: 'Согласие на обработку персональных данных'
  },
  {
    name: 'Политика использования куки'
  },
  {
    name: 'API документация'
  },
]

export default function Footer() {
  return (
    <footer className={clsx(styles.footer)}>
      <div className={clsx("rootContainer", 'container')}>
        <div className={styles.wrapper}>
          <div className={styles.contacts}>
            <Logo withText />

            <ul className={styles.contactsList}>
              <span className={styles.contactsTitle}>Контакты</span>
              <li>почта</li>
              <li>телеграм</li>
            </ul>
          </div>

          <div className={styles.docs}>
            {LINKS.map((item, index) => {
              return (
                <Link href={'/'} key={index}>
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
