import { FC } from 'react'
import styles from './AdvantageCard.module.scss'
import Image from 'next/image';

interface IAdvantageCard {
  text: string;
  image: string;
  count: number;
}

export const AdvantageCard: FC<IAdvantageCard> = ({
  text,
  image,
  count
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.infoWrp}>
          <Image
            src={`/images/advantages/${image}.svg`}
            alt={image}
            width={54}
            height={54}
          />

          <div className={styles.count}>
            {`0${count}`}
          </div>
        </div>

        <div className={styles.text}>
          {text}
        </div>
      </div>
    </div>
  )
}
