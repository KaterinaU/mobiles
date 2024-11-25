import React from 'react';

import { TableBody } from './TableBody';
import { DisplayItemsCount } from './DisplayItemsCount';
import { TablesHeader } from './TablesHeader';

import { PhoneType } from '../../../types';

import styles from '../tableStyles.module.scss';

interface TableProps {
  phones: PhoneType[];
  totalPages: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const Table = ({ phones, totalPages, currentPage, setCurrentPage }: TableProps) => {
  return (
    <div className={styles.tableContainer}>
      <TablesHeader phones={phones} totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <TableBody phones={phones} />
      <DisplayItemsCount totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};
