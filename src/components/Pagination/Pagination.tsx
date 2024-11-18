import React from 'react';
import './paginationStyles.scss';

export type PaginationType = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationType> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="pagination-container">
      {[...Array(totalPages)].map((_, index) => (
        <span
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
};
