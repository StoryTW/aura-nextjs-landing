import { AdvantageCard } from '@/components/common/AdvantageCard/AdvantageCard'
import styles from './OurAdvantagesSection.module.scss'
import clsx from 'clsx'

const DATA = [
  {
    image: 'graph',
    text: 'Высокая конверсия'
  },
  {
    image: 'shield',
    text: 'Высокий уровень безопасности. Соответствие стандарту PCI DSS'
  },
  {
    image: 'arrow',
    text: 'Низкие комиссии'
  },
  {
    image: 'headphones',
    text: 'Квалифицированная поддержка 24/7'
  },
  {
    image: 'gear',
    text: 'Простная и надежная интеграция'
  },
]

export default function OurAdvantagesSection() {
  return (
    <section id='advantages' className={clsx('container', styles.section)}>
      {/* <div className={styles.wrapper}> */}
      <h2 className={styles.title}>Наши преимущества</h2>

      <div className={styles.list}>
        {DATA.map((card, index) => {
          return (
            <AdvantageCard
              key={index}
              image={card.image}
              text={card.text}
              count={index + 1}
            />
          )
        })}
      </div>
      {/* </div> */}
    </section>
  )
}
