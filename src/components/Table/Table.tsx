import React from 'react';

import { TableBody } from './components/TableBody';
import { TablesHeader } from './components/TablesHeader';

import styles from './Table.module.scss';

interface TableProps {
  onChevronClick: (id: number) => void;
  showDifferences: boolean;
  setShowDifferences: (value: boolean) => void;
}

export const Table = ({ onChevronClick, showDifferences, setShowDifferences }: TableProps) => {
  return (
    <div className={styles.tableContainer}>
      <TablesHeader
        onChevronClick={onChevronClick}
        showDifferences={showDifferences}
        setShowDifferences={setShowDifferences}
      />
      <TableBody showDifferences={showDifferences} />
    </div>
  );
};
