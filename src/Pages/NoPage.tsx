import React from 'react';
import styles from './NoPage.module.css';

const NoPage = () => {
  return (
    <div className={styles.NoPage}>
      <p className={styles.NoPageText}>This page does not exist</p>
    </div>
  );
};

export default NoPage;
