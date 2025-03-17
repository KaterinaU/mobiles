import React from 'react';

import { TableBody } from './components/TableBody';
import { TablesHeader } from './components/TablesHeader';

import { PhoneType } from '../../types';

import styles from './Table.module.scss';

interface TableProps {
  phones: PhoneType[];
  setItemsToShow: (count: number) => void;
  itemsToShow: number;
  onChevronClick: (id: number) => void;
  showDifferences: boolean;
  setShowDifferences: (value: boolean) => void;
}

export const Table = ({
  phones,
  itemsToShow,
  setItemsToShow,
  onChevronClick,
  showDifferences,
  setShowDifferences,
}: TableProps) => {
  return (
    <div className={styles.tableContainer}>
      <TablesHeader
        phones={phones}
        itemsToShow={itemsToShow}
        setItemsToShow={setItemsToShow}
        onChevronClick={onChevronClick}
        showDifferences={showDifferences}
        setShowDifferences={setShowDifferences}
      />
      <TableBody phones={phones} showDifferences={showDifferences} />
    </div>
  );
};
