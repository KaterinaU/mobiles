import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Table } from '../../components/Table';

import { PhoneType } from '../../types';

import styles from './styles.module.scss';
import { PageContainer } from '../../components/Layout/components/Container/Container';
import { Modal } from '../../components/Modal/Modal';

export const MainPage = () => {
  const [phones, setPhones] = useState<PhoneType[]>([]);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPhoneId, setSelectedPhoneId] = useState<number | null>(null);
  const [showDifferences, setShowDifferences] = useState(false);

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

  const maxItemsToShow = Math.min(phones.length, 6); // Максимум 6 товаров

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

  return (
    <PageContainer>
      <Modal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        phones={phones.slice(itemsToShow)} // Скрытые товары
        onReplace={handleReplace}
      />
      <div className={styles.mainPage}>
        <div className={styles.phoneTable}>
          <Table
            phones={phones.slice(0, itemsToShow)} // Отображаемые товары
            setItemsToShow={(count) => setItemsToShow(Math.min(count, maxItemsToShow))}
            itemsToShow={itemsToShow}
            onChevronClick={(id) => {
              setSelectedPhoneId(id);
              setModalVisible(true);
            }}
            showDifferences={showDifferences}
            setShowDifferences={setShowDifferences}
          />
        </div>
      </div>
    </PageContainer>
  );
};
