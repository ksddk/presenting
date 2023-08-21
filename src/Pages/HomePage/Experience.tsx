import React from 'react';
import styles from './Experience.module.css';
import { CVExperience, ICVItem } from './CV';

export default function Skills() {
  return (
    <div>
      <p className={styles.ListTitle}>Experience</p>
      <div className={styles.ExperiencesContainer}>
        {CVExperience.map((item: ICVItem) => (
          <div key={item.name} className={styles.ExperienceContainer}>
            <div className={styles.LeftPart}>
              <div className={styles.ExperienceText}>
                <p className={styles.NameText}>{item.name}</p>
                <p className={styles.DescriptionText}>{item.text}</p>
              </div>
              <a href={item.link} target="_blank" rel="noreferrer">
                <button type="submit" className={styles.ExperienceButton}>
                  <i className={styles.ButtonText}>View Work</i>
                </button>
              </a>
            </div>
            <img className={styles.ExperiencePhoto} alt="Experience Photo" />
          </div>
        ))}
      </div>
    </div>
  );
}
