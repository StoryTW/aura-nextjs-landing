import Link from 'next/link'
import styles from './Navbar.module.scss'

const NAV = [
  {
    name: 'Главная ',
    link: '/'
  },
  {
    name: 'Преимущества ',
    link: '#advantages'
  },
  {
    name: 'Интеграция',
    link: '#contact'
  },
  {
    name: 'FAQ',
    link: '#faq'
  },
  {
    name: 'Контакты',
    link: '#footer'
  },
]

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {NAV.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.link} className={styles.link}>
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
