import React from 'react';
import styles from './EdLang.module.css';
import { ICVItem } from './CV';

const EduLang: ICVItem[] = [
  {
    name: 'EDUCATION',
    text: ' BELARUSIAN STATE UNIVERSITY OF INFORMATICS AND RADIOELECTRONICS 2019-2022 Faculty of Information Technology and Management Specialty: Automated information processing systems Degree:  Uncompleted'
  },
  {
    name: 'LANGUAGE',
    text: 'English: B2+ Russian: Native'
  }
];

export default function EdLang() {
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
}
