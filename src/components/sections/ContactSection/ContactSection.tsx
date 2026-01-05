import clsx from 'clsx'
import styles from './ContactSection.module.scss'
import { ContactForm } from '@/components/common/ContactForm/ContactForm'

export default function ContactSection() {
  return (
    <section className={clsx('container', styles.section)}>
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>Свяжитесь с нами</h2>

          <ContactForm />

          <div className={styles.helper}>
            Нажимая на кнопку вы соглашаетесь с политикой конфиденциальности
          </div>
        </div>
      </div>

      <div className={styles.card_two} />

      <div className={styles.card_three} />
    </section>
  )
}
