import * as React from 'react';
import { useEffect, useState } from 'react';

import { Table } from '../../components/Table';
import { PageContainer } from '../../components/Layout/components/Container/Container';
import { Modal } from '../../components/Modal/Modal';
import { PhoneReplaceContent } from '../../components/Modal/components/PhoneReplaceContent';

import { PhoneType } from '../../types';

import styles from './styles.module.scss';
import { replacePhones } from '../../redux/slices/phone/phoneSlice';
import { PhoneService } from '../../api/services/PhoneServise/PhoneServise';
import { useAppDispatch } from '../../redux/store';

export const MainPage = () => {
  const dispatch = useAppDispatch();

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPhoneId, setSelectedPhoneId] = useState<number | null>(null);
  const [showDifferences, setShowDifferences] = useState(false);
  const [modalPosition, setModalPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  useEffect(() => {
    dispatch(PhoneService.getPhones());
  }, []);

  const handleChevronClick = (id: number) => {
    const element = document.getElementById(`phone-${id}`);

    if (element) {
      const rect = element.getBoundingClientRect();

      setModalPosition({
        top: rect.top + window.scrollY + rect.height / 4,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    } else {
      console.error(`Элемент с id="phone-${id}" не найден.`);
    }
    setSelectedPhoneId(id);
    setModalVisible(true);
  };

  const handleReplace = (newPhone: PhoneType) => {
    if (selectedPhoneId !== null) {
      dispatch(replacePhones({ oldPhoneId: selectedPhoneId, newPhoneId: newPhone.id }));
      setModalVisible(false);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <PageContainer>
      <Modal isOpen={isModalVisible} onClose={handleCloseModal} phoneId={selectedPhoneId} position={modalPosition}>
        <PhoneReplaceContent onReplace={handleReplace} />
      </Modal>
      <div className={styles.mainPage}>
        <div className={styles.phoneTable}>
          <Table
            onChevronClick={handleChevronClick}
            showDifferences={showDifferences}
            setShowDifferences={setShowDifferences}
          />
        </div>
      </div>
    </PageContainer>
  );
};
