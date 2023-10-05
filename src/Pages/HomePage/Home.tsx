import React, { useRef } from 'react';
import styles from './Home.module.css';
import { ArrowDown } from '../../assets';
import { CVModule } from '../../modules/CVModule';

export const Home = () => {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={styles.HomeContainer}>
      <div className={styles.HomeMainContentWrapper}>
        <div className={styles.Title}>
          <div className={styles.Title1st}>I&apos;m a</div>
          <div className={styles.Title2nd}>Frontend Developer</div>
        </div>
        <img className={styles.Arrow} src={ArrowDown} alt="Arrow" onClick={handleClick} />
      </div>
      <div className={styles.CVContainer} ref={ref}>
        <CVModule />
      </div>
    </div>
  );
};
