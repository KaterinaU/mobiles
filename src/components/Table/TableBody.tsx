import React from 'react';

import { PhoneType, TableRowName } from '../../types/main.types';
import { Subtract_t } from '../../assets/icons/Subtract_t';
import { Subtract_f } from '../../assets/icons/Subtract_f';

interface TableBodyProps {
  phones: PhoneType[];
}

export const TableBody: React.FC<TableBodyProps> = ({ phones }) => {
  const getSpecValue = (specName: TableRowName, phone: PhoneType) => {
    const spec = phone.specs.find((spec) => spec.name === specName);
    if (specName === 'nfc' || specName === 'esim' || specName === 'inductive') {
      return spec?.value === true ? <Subtract_t /> : <Subtract_f />;
    }
    return spec ? spec.value : '';
  };

  const specNamesMap: Record<TableRowName, string> = {
    manufacturer: 'Производитель',
    releaseYear: 'Год релиза',
    screenSize: 'Диагональ экрана (дюйм)',
    country: 'Страна-производитель',
    memory: 'Объем памяти',
    refreshRate: 'Частота обновления экрана',
    nfc: 'NFC',
    esim: 'Поддержка eSIM',
    inductive: 'Поддержка беспроводной зарядки',
    price: 'Стоимость',
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
