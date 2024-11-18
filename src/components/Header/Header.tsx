import * as React from 'react';

import { Person } from '../../assets/icons/Person';

import './headerStyles.scss';

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
