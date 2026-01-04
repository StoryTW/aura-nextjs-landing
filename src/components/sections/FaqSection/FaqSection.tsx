import clsx from 'clsx'
import styles from './FaqSection.module.scss'
import { FaqItem } from '@/components/common/FaqItem/FaqItem'

const FAQ_DATA = [
  {
    question: 'Какие способы оплаты вы поддерживаете?',
    answer: 'Ответ 1'
  },
  {
    question: 'Какие требования для работы с нами?',
    answer: 'Для работы обязательно: размещение сайта на платном хостинге. При лицензируемой деятельности необходимо указать информацию о лицензиях. Также должны быть размещены данные о юридическом лице, правила возврата и отмены товаров/услуг, договор оферты, условия доставки, стоимость товаров, описание товаров и политика обработки персональных данных.'
  },
  {
    question: 'Как вы обеспечиваете безопасность средств?',
    answer: 'Ответ 3'
  },
  {
    question: 'Какие категории проектов не рассматриваются на подключение?',
    answer: 'Ответ 4'
  },
  {
    question: 'Какой функционал по интеграции вы предоставляете?',
    answer: 'Ответ 5'
  },
]

export default function FaqSection() {
  return (
    <section className={clsx('container', styles.section)}>
      <h2 className={styles.title}>FAQ</h2>

      <div className={styles.list}>
        {FAQ_DATA.map((item, index) => {
          return (
            <FaqItem
              key={index}
              answer={item.answer}
              question={item.question}
            />
          )
        })}
      </div>
    </section>
  )
}
