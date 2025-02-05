import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { PhoneType } from '../../../../types';
import { Vector } from '../../../../assets/icons/Vector';
import { selectRemainingPhones } from '../../../../redux/slices/phone/phoneSlice';

import styles from './PhoneReplaceContent.module.scss';

interface PhoneReplaceContentProps {
  onReplace: (selectedPhone: PhoneType) => void;
}

export const PhoneReplaceContent = ({ onReplace }: PhoneReplaceContentProps) => {
  const phones = useSelector(selectRemainingPhones);

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
          maxHeight: shouldShowScroll ? '300px' : 'auto',
          overflowY: shouldShowScroll ? 'auto' : 'visible',
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
