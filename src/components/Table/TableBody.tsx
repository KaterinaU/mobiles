import React from 'react';
import { PhoneType } from '../../types/main.types';

interface TableBodyProps {
  phones: PhoneType[];
}

export const TableBody: React.FC<TableBodyProps> = ({ phones }) => {
  const getSpecValue = (specName: string, phone: PhoneType) => {
    const spec = phone.specs.find((spec) => spec.name === specName);
    return spec ? spec.value : '';
  };

  const specNames: string[] = [
    'manufacturer',
    'releaseYear',
    'screenSize',
    'country',
    'memory',
    'refreshRate',
    'nfc',
    'esim',
    'inductive',
    'price',
  ];

  return (
    <div className="table-body">
      {specNames.map((specName) => (
        <div key={specName} className="table-row">
          <div className="spec-name">{specName}</div>
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
