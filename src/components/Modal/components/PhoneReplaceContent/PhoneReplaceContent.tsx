import React, { useState, useMemo } from 'react';

import { PhoneType } from '../../../../types';
import { Vector } from '../../../../assets/icons/Vector';

import styles from './PhoneReplaceContent.module.scss';

interface PhoneReplaceContentProps {
  phones: PhoneType[];
  onReplace: (selectedPhone: PhoneType) => void;
}

export const PhoneReplaceContent = ({ phones, onReplace }: PhoneReplaceContentProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPhones = useMemo(() => {
    return phones.filter((phone) => phone.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, phones]);

  const shouldShowSearch = phones.length > 3;
  const shouldShowScroll = filteredPhones.length > 3;

  return (
    <div className={styles.content}>
      {shouldShowSearch && (
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Поиск товаров..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      )}

      <div
        className={styles.phoneList}
        style={{
          maxHeight: shouldShowScroll ? '300px' : 'auto', // Прокрутка появляется только если более 3 товаров
          overflowY: shouldShowScroll ? 'auto' : 'visible', // Включаем прокрутку
        }}
      >
        {filteredPhones.map((phone) => (
          <div key={phone.id} className={styles.phoneItem} onClick={() => onReplace(phone)}>
            <Vector className={styles.vectorIconWrapper} />
            <img src={phone.image} alt={phone.name} className={styles.phoneImage} />
            <span>{phone.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
