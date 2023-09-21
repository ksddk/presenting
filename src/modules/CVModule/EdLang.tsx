import React from 'react';
import styles from './EdLang.module.css';
import { ICVItem } from './CVText';

const EduLang: ICVItem[] = [
  {
    name: 'EDUCATION',
    text: 'BELARUSIAN STATE UNIVERSITY OF INFORMATICS AND RADIOELECTRONICS\n\nFaculty of Information Technology and Management\nSpecialty: Automated information processing systems\nDegree: Uncompleted'
  },
  {
    name: 'LANGUAGES',
    text: 'English: B2+\n\nRussian: Native'
  }
];

export const EdLang = () => {
  return (
    <div className={styles.EdLangContainer}>
      {EduLang.map((item: ICVItem) => (
        <div key={item.name} className={styles.InfoBox}>
          <i className={styles.NameText}>{item.name}</i>
          <i className={styles.DescriptionText}>{item.text}</i>
        </div>
      ))}
    </div>
  );
};
