import { FC } from 'react';
import styles from './HowItWorksCard.module.scss'
import Image from 'next/image';

interface IHowItWorksCard {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
}

export const HowItWorksCard: FC<IHowItWorksCard> = ({
  title,
  description,
  image,
  width,
  height
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src={`/images/how-it-works/${image}.png`}
            alt={`${image}-image`}
            width={width}
            height={height}
          />
        </div>

        <div className={styles.textWrapper}>
          <div className={styles.title}>
            {title}
          </div>

          <div className={styles.description}>
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}
