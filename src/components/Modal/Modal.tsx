import React from 'react';

import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  phoneId: number | null;
  position: { top: number; left: number };
}

export const Modal = ({ isOpen, onClose, children, phoneId, position }: ModalProps) => {
  if (!isOpen || phoneId === null) return null;

  return (
    <div className={styles.modalWrapper} style={{ top: position.top, left: position.left, position: 'absolute' }}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
