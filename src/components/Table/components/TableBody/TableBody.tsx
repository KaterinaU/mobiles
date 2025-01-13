import React from 'react';

import { PhoneType, PhoneSpecName } from '../../../../types';

import { SubtractT } from '../../../../assets/icons/SubtractT';
import { SubtractF } from '../../../../assets/icons/SubtractF';

import styles from './TablesBody.module.scss';

interface TableBodyProps {
  phones: PhoneType[];
  showDifferences: boolean;
}

export const TableBody = ({ phones, showDifferences }: TableBodyProps) => {
  const getSpecValue = (specName: PhoneSpecName, phone: PhoneType) => {
    const spec = phone.specs.find((spec) => spec.name === specName);

    if (specName === 'nfc' || specName === 'esim' || specName === 'inductive') {
      if (spec?.value === true) {
        return { display: <SubtractT />, filter: 'true' };
      } else if (spec?.value === false) {
        return { display: <SubtractF />, filter: 'false' };
      }
      return { display: '', filter: '' };
    }

    return { display: spec?.value ?? '', filter: spec?.value ?? '' };
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

  const filterSpec = (specName: PhoneSpecName) => {
    if (showDifferences) {
      const values = phones.map((phone) => {
        const { filter } = getSpecValue(specName, phone);
        return filter;
      });

      return new Set(values).size > 1;
    }
    return true;
  };

  return (
    <div className={styles.tableBody}>
      {specNames.map((specName) =>
        filterSpec(specName) ? (
          <div key={specName} className={styles.tableRow}>
            <div className={styles.specName}>{specNamesMap[specName]}</div>
            {phones.map((phone) => {
              const { display } = getSpecValue(specName, phone);
              return (
                <div key={phone.id} className={styles.specValue}>
                  {display}
                </div>
              );
            })}
          </div>
        ) : null,
      )}
    </div>
  );
};
