import React, { useMemo } from 'react';

import { DisplayItemsCount } from './components/DisplayItemsCount';

import { PhoneType } from '../../../../types';

import styles from './TablesHeader.module.scss';
import { Chevron } from '../../../../assets/icons/Chevron';

interface TablesHeaderProps {
  phones: PhoneType[];
  setItemsToShow: (count: number) => void;
  itemsToShow: number;
  onChevronClick: (id: number) => void;
  showDifferences: boolean;
  setShowDifferences: (value: boolean) => void;
}

export const TablesHeader = ({
  phones,
  itemsToShow,
  setItemsToShow,
  onChevronClick,
  showDifferences,
  setShowDifferences,
}: TablesHeaderProps) => {
  const phoneColumnWidth = useMemo(() => `calc(100% / ${itemsToShow})`, [itemsToShow]);
  return (
    <>
      <DisplayItemsCount onChange={setItemsToShow} />
      <div className={styles.tableHeader}>
        <div className={styles.phoneNames}>
          <div className={styles.checkboxColumn}>
            <input
              type="checkbox"
              id="showDifferences"
              checked={showDifferences}
              onChange={(e) => setShowDifferences(e.target.checked)} // Обработчик изменения состояния чекбокса
            />
            <label htmlFor="showDifferences">Показать различия</label>
          </div>

          {phones.map((phone) => (
            <div key={phone.id} className={styles.phoneNamecolumn} style={{ flexBasis: phoneColumnWidth }}>
              <div className={styles.phoneContent}>
                <img src={phone.image} alt={phone.name} className={styles.phoneImage} />
                <div className={styles.chevronWrapper} onClick={() => onChevronClick(phone.id)}>
                  <Chevron className={styles.chevronIcon} />
                </div>
              </div>
              <div className={styles.phoneName}>{phone.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
