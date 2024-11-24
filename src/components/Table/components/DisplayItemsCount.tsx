import React from 'react';

import styles from '../../Pagination/paginationStyles.module.scss';

export type PaginationType = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const DisplayItemsCount: React.FC<PaginationType> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className={styles.paginationContainer}>
      {[...Array(totalPages)].map((_, index) => (
        <span
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`${styles.paginationNumber} ${currentPage === index + 1 ? styles.active : ''}`}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
};
