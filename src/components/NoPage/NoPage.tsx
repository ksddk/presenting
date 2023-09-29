import React from 'react';
import styles from './NoPage.module.css';

export const NoPage = () => {
  return (
    <div className={styles.NoPage}>
      <p className={styles.Title}>404</p>
      <p className={styles.NoPageText}>
        Sorry. the content you&apos;re looking for doesn&apos;t exist. Either it was removed, or you
        mistyped the link.
      </p>
      <a href="/">
        <button type="submit" className={styles.Button}>
          <i className={styles.ButtonText}>Go Home</i>
        </button>
      </a>
    </div>
  );
};
