import * as React from 'react';
import './styles.scss';
import { Person } from '../../assets/icons/Person';

export const Header = () => {
  return (
    <div className="header">
      <div className="catalog">Каталог</div>
      <div className="account">
        <div>СРАВНЕНИЕ</div>
        <div>Личный кабинет</div>
        <Person className="icons" />
      </div>
    </div>
  );
};
