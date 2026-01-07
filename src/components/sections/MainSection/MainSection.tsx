import { Header } from '@/layout/Header/Header'
import styles from './MainSection.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

export default function MainSection() {
  return (
    <div className={clsx('container', styles.mainWrapper)}>
      <Header />

      <section className={styles.section}>
        <div className={styles.mainInfo}>
          <h1 className={styles.title}>
            Надежная платежная{' '}
            <span className={styles.title2}>система для вашего</span>{' '}
            <span className={styles.title3}>бизнеса</span>
          </h1>

          <div className={styles.description}>
            Современные технологии защиты и полный контроль операций
          </div>

          <hr className={styles.line} />

          <div className={styles.online}>
            <div className={styles.avatars}>
              <Image
                src={'/images/main/avatarsAll.png'}
                alt='avatars'
                width={275}
                height={71}
              />
            </div>

            <div className={styles.onlineInfo}>
              <div className={styles.count}>
                168k +
              </div>
              <div className={styles.countDescription}>
                пользуются ежедневно
              </div>
            </div>
          </div>

          <hr className={styles.line} />

          <div className={styles.secure}>
            <div className={styles.secureImg}>
              <Image
                src={'/images/main/secure-circle.svg'}
                alt='secure-circle'
                width={103}
                height={77}
              />
            </div>

            <div className={styles.secureText}>
              Платёжная система надёжна: <br />
              защита данных, шифрование, контроль операций и стабильная работа 24/7
            </div>
          </div>
        </div>

        <div className={styles.img}>
          <Image
            src={'/images/main/phone-main.png'}
            width={640}
            height={638}
            alt='phone'
          />
        </div>
      </section>
    </div>
  )
}
