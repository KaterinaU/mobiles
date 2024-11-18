import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { TablesHeader } from '../../components/Table';
import { TableBody } from '../../components/Table';
import { PhoneType } from '../../types/main.types';

import './styles.scss';

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
    <div className="main-page">
      <div>
        <Header />
      </div>
      <div className="phone-table">
        <TablesHeader
          phones={displayedPhones}
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <TableBody phones={displayedPhones} />
      </div>
    </div>
  );
};
