import React, { useRef } from 'react';
import styles from './Home.module.css';
import ArrowDown from './Assets/ArrowDown.svg';
import { CV, Experience, ICVItem } from './CV';

const Home = () => {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={styles.HomeContainer}>
      <div className={styles.HomeMainContentWrapper}>
        <div className={styles.Title}>
          <div className={styles.Title1st}>I&apos;m a</div>
          <div className={styles.Title2nd}>Full Stack Developer</div>
        </div>
        <img className={styles.Arrow} src={ArrowDown} alt="Arrow" onClick={handleClick} />
      </div>
      <div className={styles.Work}>
        <div className={styles.WorksTitle}>
          <div className={styles.WorksTitle1st} ref={ref}>
            Selected
          </div>
          <div className={styles.WorksTitle2nd}>Works</div>
        </div>
        {CV.map((item: ICVItem) => (
          <div key={item.name} className={styles.CardWrapper}>
            <img className={styles.WorkPhoto} alt="IMAGE" />
            <div className={styles.WorkWrapper}>
              <p className={styles.WorkTitle}>{item.name}</p>
              <p className={styles.WorkText}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
