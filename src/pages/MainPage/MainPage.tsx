import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Table } from '../../components/Table/components/Table';

import { PhoneType } from '../../types';

import styles from './styles.module.scss';
import { PageContainer } from '../../components/Layout/components/Container/Container';

export const MainPage = () => {
  const [phones, setPhones] = useState<PhoneType[]>([]);

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
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

  const totalPages = Math.ceil(phones.length / itemsPerPage);

  const displayedPhones = phones.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <PageContainer>
      <div className={styles.mainPage}>
        <div className={styles.phoneTable}>
          <Table
            phones={displayedPhones}
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </PageContainer>
  );
};
