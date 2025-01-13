import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Table } from '../../components/Table';
import { PageContainer } from '../../components/Layout/components/Container/Container';
import { Modal } from '../../components/Modal/Modal';
import { PhoneReplaceContent } from '../../components/Modal/components/PhoneReplaceContent';

import { PhoneType } from '../../types';

import styles from './styles.module.scss';

export const MainPage = () => {
  const [phones, setPhones] = useState<PhoneType[]>([]);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPhoneId, setSelectedPhoneId] = useState<number | null>(null);
  const [showDifferences, setShowDifferences] = useState(false);
  const [modalPosition, setModalPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  useEffect(() => {
    axios
      .get('/data/phones.json')
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  const maxItemsToShow = Math.min(phones.length, 6);
  const phonesToReplace = phones.slice(itemsToShow);
  const visiblePhones = phones.slice(0, itemsToShow);

  const handleChevronClick = (id: number) => {
    const element = document.getElementById(`phone-${id}`);

    if (element) {
      const rect = element.getBoundingClientRect();

      setModalPosition({
        top: rect.top + window.scrollY + rect.height / 4, // наполовину перекрывает телефон
        left: rect.left + window.scrollX + rect.width / 2, // центрируем по горизонтали
      });
    } else {
      console.error(`Элемент с id="phone-${id}" не найден.`);
    }

    setSelectedPhoneId(id);
    setModalVisible(true);
  };

  const handleReplace = (newPhone: PhoneType) => {
    if (selectedPhoneId !== null) {
      const updatedPhones = [...phones];
      const replaceIndex = phones.findIndex((phone) => phone.id === selectedPhoneId);
      const newIndex = phones.findIndex((phone) => phone.id === newPhone.id);

      if (replaceIndex !== -1 && newIndex !== -1) {
        [updatedPhones[replaceIndex], updatedPhones[newIndex]] = [updatedPhones[newIndex], updatedPhones[replaceIndex]];
        setPhones(updatedPhones);
        setModalVisible(false);
      }
    }
  };

  const handleShowItemsChange = (count: number) => {
    setItemsToShow(Math.min(count, maxItemsToShow));
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <PageContainer>
      <Modal isOpen={isModalVisible} onClose={handleCloseModal} phoneId={selectedPhoneId} position={modalPosition}>
        <PhoneReplaceContent phones={phonesToReplace} onReplace={handleReplace} />
      </Modal>
      <div className={styles.mainPage}>
        <div className={styles.phoneTable}>
          <Table
            phones={visiblePhones}
            setItemsToShow={handleShowItemsChange}
            itemsToShow={itemsToShow}
            onChevronClick={handleChevronClick}
            showDifferences={showDifferences}
            setShowDifferences={setShowDifferences}
          />
        </div>
      </div>
    </PageContainer>
  );
};
