import styles from './Footer.module.css';
import { LinkedIn, Mail, GitHub } from '../../assets';

interface IContact {
  name: string;
  link: string;
  logo: string;
}

const contacts: IContact[] = [
  { name: 'Gmail', link: 'mailto:kseniya.dedik@gmail.com', logo: Mail },
  { name: 'GitHub', link: 'https://github.com/ksddk', logo: GitHub },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/ksddk/', logo: LinkedIn }
];

export const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.wrapperContainer}>
        <div className={styles.TitleContainer}>
          <div className={styles.Text1}>
            <i className={styles.Text1st}>Get</i>
            <i className={styles.Text2nd}>in Touch.</i>
          </div>
          <div className={styles.Text2}>So that we can talk more about...</div>
        </div>
        <div className={styles.SocialMedia}>
          {contacts.map(({ name, link, logo }: IContact) => (
            <a
              key={name}
              href={link}
              className={styles.ContactLink}
              target="_blank"
              rel="noreferrer">
              <img src={logo} alt={name} className={styles.Logo} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
