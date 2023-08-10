import React from 'react';
import styles from './Skills.module.css';
import { CVSkills, ICVItem } from './CV';

export default function Skills() {
  return (
    <div>
      <p className={styles.ListTitle}>Skills</p>
      <div className={styles.SkillsContainer}>
        {CVSkills.map((item: ICVItem) => (
          <div key={item.name}>
            <div className={styles.SkillContainer}>
              <i className={styles.NameText}>{item.name}</i>
              <i className={styles.DescriptionText}>{item.text}</i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
