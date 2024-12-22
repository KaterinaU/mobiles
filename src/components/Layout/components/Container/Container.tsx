import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
}

export const PageContainer = ({ children }: ContainerProps) => {
  return <div className={styles.pageContainer}>{children}</div>;
};
