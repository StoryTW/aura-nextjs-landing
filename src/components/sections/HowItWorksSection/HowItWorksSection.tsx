import { HowItWorksCard } from '@/components/common/HowItWorksCard/HowItWorksCard'
import { ButtonLink } from '@/components/ui/ButtonLink/ButtonLink'
import { REGISTER_LINK } from '@/utils/links'
import styles from './HowItWorksSection.module.scss'

const DATA = [
  {
    title: 'Регистрация',
    description: 'Создайте учетную запись, добавьте ваш сайт и пройдите модерацию',
    image: 'card1',
    width: 382,
    height: 113,
  },
  {
    title: 'Интеграция',
    description: 'Подключите готовое решение для вашей CMS или используйте API',
    image: 'card2',
    width: 377,
    height: 160,
  },
  {
    title: 'Приём платежей',
    description: 'Начните принимать оплату и отслеживать платежи в удобной панели управления',
    image: 'card3',
    width: 372,
    height: 130,
  },
]

export default function HowItWorksSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>Как работает сервис</h2>

          <div className={styles.cardList}>
            {DATA.map((card, index) => {
              return (
                <HowItWorksCard
                  key={index}
                  {...card}
                />
              )
            })}
          </div>
        </div>
      </div>

      <div className={styles.registerInfo}>
        <div className={styles.contentWrapper2}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Онлайн-платежи на вашем сайте - <span>легко, надёжно и быстро!</span></h3>

            <div className={styles.infoDescription}>
              Подключите интернет эквайринг и начните принимать платежи от клиентов по картам, СБП, алектронным кошелькам и криптовалюте - без сложностей и скрытых комиссий
            </div>
          </div>

          <ButtonLink href={REGISTER_LINK} variant='primary' size='s' target='_blank'>
            Зарегестрироваться
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
