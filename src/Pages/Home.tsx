import React from 'react';
import styles from './Home.module.css';
import ArrowDown from './Assets/ArrowDown.svg';

interface ICVItem {
  name: string;
  text: string;
}
const CV: ICVItem[] = [
  {
    name: 'Language',
    text: 'English'
  },
  {
    name: 'Skills',
    text: 'Javascript'
  }
];

const Home = () => {
  return (
    <div className={styles.HomeContainer}>
      <div className={styles.Title}>
        <div className={styles.Title1st}>I am a</div>
        <div className={styles.Title2nd}>Full Stack Developer</div>
      </div>
      <img className={styles.Arrow} src={ArrowDown} alt="Arrow"></img>
      {CV.map((item: ICVItem) => (
        <>
          <h3 key={item.name}>{item.name}</h3>
          <p
            key={item.text}
            style={{
              color: 'white',
              display: 'block',
              fontWeight: 'bold',
              margin: '5px',
              textDecoration: 'none'
            }}>
            {item.text}
          </p>
        </>
      ))}
    </div>
  );
};

export default Home;
