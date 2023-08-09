import React from 'react';
import styles from './NoPage.module.css';

const NoPage = () => {
  return (
    <div className={styles.NoPage}>
      <p className={styles.Title}>404</p>
      <p className={styles.NoPageText}>
        Sorry. the content you&apos;re looking for doesn&apos;t exist. Either it was removed, or you
        mistyped the link.
      </p>
      <button className={styles.Button}>Go Home</button>
    </div>
  );
};

export default NoPage;
