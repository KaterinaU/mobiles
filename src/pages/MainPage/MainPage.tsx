import * as React from 'react';
import { PhoneType } from '../../types/main.types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TablesHeader } from '../../components/Table/TablesHeader';
import { TableBody } from '../../components/Table/TableBody';
import './styles.scss';
import { Header } from '../../components/Header/Header';

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

  const displayedPhones = phones.slice(0, 3); // Отображаем только первые три телефона

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="phone-table">
        <TablesHeader phones={displayedPhones} />
        <TableBody phones={displayedPhones} />
      </div>
    </>
  );
};
