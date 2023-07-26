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
    name: 'Shopping List',
    link: '/list'
  }
];

function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.svgContainer}>
        <img src={Title} alt="Kseniya Dedik" />
      </div>

      <div className={styles.navItems}>
        {pages.map(({ name, link }) => (
          <a key={name} href={link} className={styles.link}>
            {name}
          </a>
        ))}
      </div>
      {/* <img alt="Ks" src="./ks_photo_cropped.jpg" /> */}
    </div>
  );
}

export default Navigation;
