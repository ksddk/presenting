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
}

export default Navigation;
