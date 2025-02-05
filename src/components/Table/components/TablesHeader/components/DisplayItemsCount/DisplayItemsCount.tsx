import React, { useState } from 'react';
import { useAppDispatch } from '../../../../../../redux/store';
import { setDisplayedPhonesCount } from '../../../../../../redux/slices/phone/phoneSlice';

import styles from './DisplayItemsCount.module.scss';

const ITEMS_COUNT_OPTIONS = [2, 3, 4, 5, 6];

export const DisplayItemsCount = () => {
  const dispatch = useAppDispatch();

  const [activeCount, setActiveCount] = useState<number>(ITEMS_COUNT_OPTIONS[0]);

  const createButtonClickHandler = (count: number) => () => {
    setActiveCount(count);
    dispatch(setDisplayedPhonesCount(count));
  };

  return (
    <div className={styles.headerSmart}>
      <div className={styles.smart}>Смартфоны</div>
      <div className={styles.counter}>
        <div>Отобразить товары:</div>
        <div className={styles.displayContainer}>
          {ITEMS_COUNT_OPTIONS.map((count) => (
            <button
              key={count}
              className={`${styles.displayNumber} ${activeCount === count ? styles.active : ''}`}
              onClick={createButtonClickHandler(count)}
            >
              {count}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
