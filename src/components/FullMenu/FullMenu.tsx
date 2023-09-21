import react from 'react';
import Title from '../../Pages/Assets/Title.svg';
import { IPages } from '../Navigation/Navigation';
import styles from './FullMenu.module.css';

interface Props {
  pages: IPages[];
}

export const FullMenu = ({ pages }: Props) => {
  return (
    <div className={styles.navigation}>
      <a href="/" className={styles.svgContainer}>
        <img src={Title} alt="Kseniya Dedik" />
      </a>

      <div className={styles.navItems}>
        {pages.map(({ name, link }) => (
          <a key={name} href={link} className={styles.link}>
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};
