import { useMediaQuery } from 'react-responsive';
import react, { useState } from 'react';
import Title from './Assets/Title.svg';
import styles from './Navigation.module.css';

interface IPages {
  name: string;
  link: string;
}

const pages: IPages[] = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Todo Application',
    link: '/todoapp'
  }
];

function Navigation() {
  // TODO: add hamburger here on 768px
  const isMedium = useMediaQuery({
    query: '(max-width: 768px)'
  });

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {!isMedium ? (
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
      ) : (
        <>
          <button onClick={handleClick}>Hamburger</button>
          {isOpen ? (
            <div style={{ border: '3px solid red', height: '100vh' }}>
              {pages.map(({ name, link }) => (
                <a key={name} href={link} className={styles.link}>
                  {name}
                </a>
              ))}
              <button onClick={handleClick}>Close</button>
            </div>
          ) : null}
        </>
      )}
    </>
  );
}

export default Navigation;
