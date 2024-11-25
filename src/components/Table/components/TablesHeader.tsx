import React from 'react';

import { DisplayItemsCount } from '../../Pagination';

import { PhoneType } from '../../../types';

import styles from '../tableStyles.module.scss';

interface TablesHeaderProps {
  phones: PhoneType[];
  totalPages: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const TablesHeader = ({ phones, currentPage, totalPages, setCurrentPage }: TablesHeaderProps) => {
  return (
    <>
      <div className={styles.headerSmart}>
        <div className={styles.smart}>Смартфоны</div>
        <div className={styles.pagination}>
          <div>Отобразить товары:</div>
          <DisplayItemsCount totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>
      </div>
      <div className={styles.tableHeader}>
        <div className={styles.phoneNames}>
          <div className={styles.checkboxColumn}>
            <input type="checkbox" id="showDifferences" />
            <label htmlFor="showDifferences">Показать различия</label>
          </div>

          {phones.map((phone) => (
            <div key={phone.id} className={styles.phoneNamecolumn}>
              <img src={phone.image} alt={phone.name} className={styles.phoneImage} />

              <div>{phone.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
