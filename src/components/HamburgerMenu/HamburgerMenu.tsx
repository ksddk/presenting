import react, { useState } from 'react';
import Cross from '../../Pages/Assets/Cross.svg';
import Hamburger from '../../Pages/Assets/Hamburger.svg';
import { IPages } from '../../Pages/Navigation';
import styles from './HamburgerMenu.module.css';

interface Props {
  pages: IPages[];
}

export const HamburgerMenu = ({ pages }: Props) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      {isOpen === false ? (
        <button onClick={handleClick} className={styles.hambIcon}>
          <img src={Hamburger} alt="Hamburger" />
        </button>
      ) : null}
      {isOpen ? (
        <div className={styles.hambMenu}>
          <button onClick={handleClick} className={styles.crossIcon}>
            <img src={Cross} alt="Close" />
          </button>
          <div className={styles.navItems}>
            {pages.map(({ name, link }) => (
              <a key={name} href={link} className={styles.link}>
                {name}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
