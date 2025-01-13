import React, { useMemo } from 'react';

import { DisplayItemsCount } from './components/DisplayItemsCount';
import { Chevron } from '../../../../assets/icons/Chevron';

import { PhoneType } from '../../../../types';

import styles from './TablesHeader.module.scss';

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

  const handleShowDifferencesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Состояние изменено:', e.target.checked);
    setShowDifferences(e.target.checked);
  };

  const handleChevronClick = (id: number) => () => {
    onChevronClick(id);
  };
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
              onChange={handleShowDifferencesChange}
            />
            <label htmlFor="showDifferences">Показать различия</label>
          </div>

          {phones.map((phone) => (
            <div key={phone.id} className={styles.phoneNamecolumn} style={{ flexBasis: phoneColumnWidth }}>
              <div className={styles.phoneContent}>
                <img src={phone.image} alt={phone.name} className={styles.phoneImage} />
                <div id={`phone-${phone.id}`} className={styles.chevronWrapper} onClick={handleChevronClick(phone.id)}>
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
