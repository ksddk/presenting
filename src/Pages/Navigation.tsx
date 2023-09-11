import { slide as Menu } from 'react-burger-menu';
import Title from './Assets/Title.svg';
import styles from './Navigation.module.css';
import { useState } from 'react';

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

// var menuStyles = {
//   bmBurgerButton: {
//     position: 'fixed', //кнопка - полосочки меню
//     width: '26px',
//     height: '20px',
//     left: '26px',
//     top: '26px'
//   },
//   bmBurgerBars: {
//     background: '#333333' //цвет полосочек
//   },
//   bmBurgerBarsHover: {
//     // background: '#a90000',
//     background: 'blue',
//     border: '3px solid red' //пока хз
//   },
//   bmCrossButton: {
//     height: '24px', //пока хз
//     width: '24px'
//   },
//   bmCross: {
//     background: '#D9D9D9' //цвет крестика
//   },
//   bmMenuWrap: {
//     position: 'fixed',
//     height: '100%'
//   },
//   bmMenu: {
//     background: '#CCACE2',
//     padding: '2.5em 1.5em 0',
//     fontSize: '1.15em'
//   },
//   bmMorphShape: {
//     fill: '#373a47'
//   },
//   bmItemList: {
//     padding: '0.8em'
//   },
//   bmItem: {
//     display: 'flex',
//     flexDirection: 'column',
//     textDecoration: 'none',
//     color: 'black'
//   },
//   bmOverlay: {
//     background: 'rgba(0, 0, 0, 0.1)'
//   }
// };

function Navigation() {
  // TODO: add hamburger here on 768px
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      {/* <Menu styles={menuStyles} isOpen={isMenuOpen}>
        <div>
          {pages.map(({ name, link }) => (
            <a key={name} href={link} className="menu-item">
              {name}
            </a>
          ))}
        </div>
      </Menu> */}
    </div>
  );
}

export default Navigation;
