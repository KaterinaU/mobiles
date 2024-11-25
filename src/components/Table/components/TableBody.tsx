import React from 'react';

import { PhoneType, PhoneSpecName } from '../../../types';

import { SubtractT } from '../../../assets/icons/SubtractT';
import { SubtractF } from '../../../assets/icons/SubtractF';

import styles from '../tableStyles.module.scss';

interface TableBodyProps {
  phones: PhoneType[];
}

export const TableBody = ({ phones }: TableBodyProps) => {
  const getSpecValue = (specName: PhoneSpecName, phone: PhoneType) => {
    const spec = phone.specs.find((spec) => spec.name === specName);
    if (specName === 'nfc' || specName === 'esim' || specName === 'inductive') {
      return spec?.value === true ? <SubtractT /> : <SubtractF />;
    }
    return spec ? spec.value : '';
  };

  const specNamesMap: Record<PhoneSpecName, string> = {
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

  const specNames: PhoneSpecName[] = Object.keys(specNamesMap) as PhoneSpecName[];

  return (
    <div className={styles.tableBody}>
      {specNames.map((specName) => (
        <div key={specName} className={styles.tableRow}>
          <div className={styles.specName}>{specNamesMap[specName]}</div>
          {phones.map((phone) => (
            <div key={phone.id} className={styles.specValue}>
              {getSpecValue(specName, phone)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
