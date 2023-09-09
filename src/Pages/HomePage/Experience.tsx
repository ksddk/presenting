import { useMediaQuery } from 'react-responsive';
import styles from './Experience.module.css';
import { CVExperience, ICVItem } from './CV';

export default function Skills() {
  const isMedium = useMediaQuery({
    query: '(max-width: 768px)'
  });

  return (
    <div className={styles.experiences}>
      <p className={styles.ListTitle}>Experience</p>
      <div className={styles.ExperiencesContainer}>
        {CVExperience.map((item: ICVItem) => (
          <div key={item.name} className={styles.ExperienceContainer}>
            <div className={styles.LeftPart}>
              <div className={styles.ExperienceText}>
                <p className={styles.NameText}>{item.name}</p>
                {isMedium ? (
                  <img className={styles.ExperiencePhoto} alt="Experience Photo" />
                ) : null}
                <p className={styles.DescriptionText}>{item.text}</p>
              </div>
              <a href={item.link} target="_blank" rel="noreferrer">
                <button type="submit" className={styles.ExperienceButton}>
                  <i className={styles.ButtonText}>View Work</i>
                </button>
              </a>
            </div>
            {!isMedium ? <img className={styles.ExperiencePhoto} alt="Experience Photo" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
