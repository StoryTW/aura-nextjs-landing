'use client'
import { FC, JSX, useState } from 'react';
import clsx from 'clsx';
import styles from './FaqItem.module.scss';
import { AnimatePresence, motion } from 'motion/react';
import { animateHelper } from '@/utils/animation.helper';
import IconPlus from '@/assets/icons/icon_plus.svg?react';

interface IFaqItem {
  question: string;
  answer: string | JSX.Element;
}

export const FaqItem: FC<IFaqItem> = ({
  answer,
  question
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div
      className={clsx(styles.item, {
        [styles.open]: isOpen
      })}
      onClick={handleOpen}
    >
      <div className={styles.questionWrapper}>
        <div className={styles.questionText}>
          {question}
        </div>

        <div className={clsx(styles.questionIcon, {
          [styles.open]: isOpen
        })}>
          <IconPlus />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          variants={animateHelper('animateHeightWithOpacity')}
          initial="hide"
          animate={isOpen ? "show" : "hide"}
          exit="hide"
        >
          <div className={styles.answerText}>
            {answer}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
