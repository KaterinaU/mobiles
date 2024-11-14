import React from 'react';
import { PhoneType } from '../../types/main.types';

interface TablesHeaderProps {
  phones: PhoneType[];
}

export const TablesHeader: React.FC<TablesHeaderProps> = ({ phones }) => {
  return (
    <div className="table-header">
      {/* Контейнер для картинок телефонов */}
      <div className="phone-images">
        {/* Пустая колонка для первой ячейки */}
        <div className="empty-column"></div>

        {/* Колонки с картинками телефонов */}
        {phones.map((phone) => (
          <div key={phone.id} className="phone-image-column">
            <img src={phone.image} alt={phone.name} className="phone-image" />
          </div>
        ))}
      </div>

      {/* Контейнер для названий телефонов */}
      <div className="phone-names">
        <div className="checkbox-column">
          <input type="checkbox" id="showDifferences" />
          <label htmlFor="showDifferences">Показать различия</label>
        </div>

        {/* Колонки с названиями телефонов */}
        {phones.map((phone) => (
          <div key={phone.id} className="phone-name-column">
            {phone.name}
          </div>
        ))}
      </div>
    </div>
  );
};
