import React, { useRef } from 'react';
import styles from './Home.module.css';
import ArrowDown from './Assets/ArrowDown.svg';
import AboutMe from './HomePage/AboutMe';
import Skills from './HomePage/Skills';
import Experience from './HomePage/Experience';
import EdLang from './HomePage/EdLang';

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
        {/* TODO: implement arrow */}
        {/* <img className={styles.Arrow} src={ArrowDown} alt="Arrow" onClick={handleClick} /> */}
      </div>
      <div className={styles.CVContainer} ref={ref}>
        <AboutMe />
        <Skills />
        {/* TODO: refactor responsive design for Experiences */}
        {/* <Experience /> */}
        <EdLang />
      </div>
    </div>
  );
};

export default Home;
