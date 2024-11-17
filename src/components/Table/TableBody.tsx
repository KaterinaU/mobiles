import React from 'react';
import { PhoneType, TableRowName } from '../../types/main.types';

interface TableBodyProps {
  phones: PhoneType[];
}

export const TableBody: React.FC<TableBodyProps> = ({ phones }) => {
  const getSpecValue = (specName: TableRowName, phone: PhoneType) => {
    const spec = phone.specs.find((spec) => spec.name === specName);
    return spec ? spec.value : '';
  };

  const specNamesMap: Record<TableRowName, string> = {
    manufacturer: 'Производитель',
    releaseYear: 'Год выпуска',
    screenSize: 'Размер экрана',
    country: 'Страна',
    memory: 'Память',
    refreshRate: 'Частота обновления',
    nfc: 'NFC',
    esim: 'eSIM',
    inductive: 'Беспроводная зарядка',
    price: 'Цена',
  };

  const specNames: TableRowName[] = Object.keys(specNamesMap) as TableRowName[];

  return (
    <div className="table-body">
      {specNames.map((specName) => (
        <div key={specName} className="table-row">
          <div className="spec-name">{specNamesMap[specName]}</div>
          {phones.map((phone) => (
            <div key={phone.id} className="spec-value">
              {getSpecValue(specName, phone)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
