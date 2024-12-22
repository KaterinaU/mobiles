import React, { useState, useMemo } from 'react';
import styles from './Modal.module.scss';
import { PhoneType } from '../../types';
import { Vector } from '../../assets/icons/Vector';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  phones: PhoneType[];
  onReplace: (selectedPhone: PhoneType) => void;
}

export const Modal: React.FC<ModalProps> = ({ isVisible, onClose, phones, onReplace }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPhones = useMemo(() => {
    return phones.filter((phone) => phone.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, phones]);

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={handleModalClick}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {phones.length > 3 && (
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
            maxHeight: phones.length > 3 ? '200px' : 'auto',
            overflowY: phones.length > 3 ? 'scroll' : 'visible',
          }}
        >
          {filteredPhones.map((phone) => (
            <div
              key={phone.id}
              className={styles.phoneItem}
              onClick={(e) => {
                e.stopPropagation();
                onReplace(phone);
              }}
            >
              <div className={styles.vectorIconWrapper}>
                <Vector />
              </div>
              <img src={phone.image} alt={phone.name} className={styles.phoneImage} />
              <span className={styles.phoneName}>{phone.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
