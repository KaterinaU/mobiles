import * as React from 'react';

import { Person } from '../../../../assets/icons/Person';

import styles from './headerStyles.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.catalog}>Каталог</div>
      <div className={styles.account}>
        <div>СРАВНЕНИЕ</div>
        <div>Личный кабинет</div>
        <Person className="icons" />
      </div>
    </div>
  );
};
