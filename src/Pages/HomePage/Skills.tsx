import React from 'react';
import styles from './Skills.module.css';
import { CVSkills, ICVItem } from './CV';

export default function Skills() {
  return (
    <div>
      <p className={styles.ListTitle}>Skills</p>
      {CVSkills.map((item: ICVItem) => (
        <div key={item.name} className={styles.SkillsContainer}>
          <div className={styles.SkillContainer}>
            <p className={styles.NameText}>{item.name}</p>
            <p className={styles.DescriptionText}>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
