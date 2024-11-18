import React from 'react';

import { PhoneType } from '../../types/main.types';
import { Pagination } from '../Pagination';

import './tableStyles.scss';

interface TablesHeaderProps {
  phones: PhoneType[];
  totalPages: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const TablesHeader: React.FC<TablesHeaderProps> = ({ phones, currentPage, totalPages, setCurrentPage }) => {
  return (
    <>
      <div className="header-smart">
        <div className="smart">Смартфоны</div>
        <div className="pagination">
          <div>Отобразить товары:</div>
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>
      </div>
      <div className="table-header">
        <div className="phone-names">
          <div className="checkbox-column">
            <input type="checkbox" id="showDifferences" />
            <label htmlFor="showDifferences">Показать различия</label>
          </div>

          {phones.map((phone) => (
            <div key={phone.id} className="phone-name-column">
              <img src={phone.image} alt={phone.name} className="phone-image" />

              <div>{phone.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
