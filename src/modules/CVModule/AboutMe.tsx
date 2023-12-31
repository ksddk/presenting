import React from 'react';
import styles from './AboutMe.module.css';
import { Avatar } from '../../assets';

export const AboutMe = () => {
  return (
    <div className={styles.AboutMeContainer}>
      <div>
        <div className={styles.ListTitle}>About me</div>
        <div className={styles.AboutMeText}>
          JavaScript developer focused on web development. Strong knowledge of software development.
          Consistently recognized as a fast learner with a passion for new challenges. Skilled at
          starting projects from scratch, and issues root cause analysis. Able to prepare and
          support projects documentation.
        </div>
      </div>
      <img className={styles.Avatar} src={Avatar} alt="KSENIYA DEDIK" />
    </div>
  );
};
