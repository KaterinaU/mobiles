import React from 'react';
import { PhoneType } from '../../types/main.types';

interface TablesHeaderProps {
  phones: PhoneType[];
}

export const TablesHeader: React.FC<TablesHeaderProps> = ({ phones }) => {
  return (
    <>
      <div>
        <div>Смартфоны</div>
        <div>Отобразить товары: 2 3 4 5 6</div>
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
