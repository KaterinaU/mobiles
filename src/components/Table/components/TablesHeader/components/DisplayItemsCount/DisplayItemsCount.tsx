import React from 'react';

import styles from './DisplayItemsCount.module.scss';

const ITEMS_COUNT_OPTIONS = [2, 3, 4, 5, 6];

export type DisplayItemsCountType = {
  onChange: (count: number) => void;
};

export const DisplayItemsCount = ({ onChange }: DisplayItemsCountType) => {
  const handleButtonClick = (count: number) => {
    onChange(count);
  };
  return (
    <>
      <div className={styles.headerSmart}>
        <div className={styles.smart}>Смартфоны</div>
        <div className={styles.counter}>
          <div>Отобразить товары:</div>
          <div className={styles.displayContainer}>
            {ITEMS_COUNT_OPTIONS.map((count) => (
              <button key={count} className={styles.displayNumber} onClick={() => handleButtonClick(count)}>
                {count}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
