import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectDisplayedPhones, selectDisplayedPhonesCount } from '../../../../redux/slices/phone/phoneSlice';

import { DisplayItemsCount } from './components/DisplayItemsCount';
import { Chevron } from '../../../../assets/icons/Chevron';

import styles from './TablesHeader.module.scss';

interface TablesHeaderProps {
  onChevronClick: (id: number) => void;
  showDifferences: boolean;
  setShowDifferences: (value: boolean) => void;
}

export const TablesHeader = ({ onChevronClick, showDifferences, setShowDifferences }: TablesHeaderProps) => {
  const displayedPhonesCount = useSelector(selectDisplayedPhonesCount);

  const phones = useSelector(selectDisplayedPhones);

  const phoneColumnWidth = useMemo(() => `calc(100% / ${displayedPhonesCount})`, [displayedPhonesCount]);
  const handleShowDifferencesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowDifferences(e.target.checked);
  };

  const handleChevronClick = (id: number) => () => {
    onChevronClick(id);
  };
  return (
    <>
      <DisplayItemsCount />
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
