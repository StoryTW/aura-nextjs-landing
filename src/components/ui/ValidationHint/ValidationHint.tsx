import { FC } from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './ValidationHint.module.scss';
import { animateHelper } from '@/utils/animation.helper';

interface IValidationHint {
  errorMsg: string;
  className?: string;
}

export const ValidationHint: FC<IValidationHint> = ({ errorMsg, className }) => {
  return (
    <AnimatePresence mode='wait'>
      {errorMsg && (
        <motion.div
          variants={animateHelper('animateHeightWithOpacity')}
          initial='hide'
          animate='show'
          exit='hide'
          transition={{ duration: 0.15 }}
        >
          <div
            className={clsx(styles.message, className, {
              [styles.error]: errorMsg,
            })}
          >
            {errorMsg}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
