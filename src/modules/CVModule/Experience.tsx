import { useMediaQuery } from 'react-responsive';
import styles from './Experience.module.css';
import { CVExperience } from './CVText';
import { ResumePhoto, TodoPhoto, DBPhoto } from '../../assets';

export const Experience = () => {
  const isMedium = useMediaQuery({
    query: '(max-width: 768px)'
  });

  return (
    <div className={styles.experiences}>
      <p className={styles.ListTitle}>Experience</p>
      <div className={styles.ExperiencesContainer}>
        <div className={styles.ExperienceContainer}>
          <div className={styles.TextButton}>
            <div className={styles.ExperienceText}>
              <p className={styles.NameText}>{CVExperience[0].name}</p>
              {isMedium ? (
                <img src={ResumePhoto} className={styles.ExperiencePhoto} alt="Resume Photo" />
              ) : null}
              <p className={styles.DescriptionText}>{CVExperience[0].text}</p>
            </div>
            <a href={CVExperience[0].link} target="_blank" rel="noreferrer">
              <button type="submit" className={styles.ExperienceButton}>
                <i className={styles.ButtonText}>View Work</i>
              </button>
            </a>
          </div>
          {!isMedium ? (
            <img src={ResumePhoto} className={styles.ExperiencePhoto} alt="Resume Photo" />
          ) : null}
        </div>
        <div className={styles.ExperienceContainer}>
          {!isMedium ? <img src={TodoPhoto} className={styles.TodoPhoto} alt="Todo Photo" /> : null}
          <div className={styles.TextButton}>
            <div className={styles.ExperienceText}>
              <p className={styles.NameText}>{CVExperience[1].name}</p>
              {isMedium ? (
                <img src={TodoPhoto} className={styles.TodoPhoto} alt="Todo Photo" />
              ) : null}
              <p className={styles.DescriptionText}>{CVExperience[1].text}</p>
            </div>
            <a href={CVExperience[1].link} target="_blank" rel="noreferrer">
              <button type="submit" className={styles.ExperienceButton}>
                <i className={styles.ButtonText}>View Work</i>
              </button>
            </a>
          </div>
        </div>
        <div className={styles.ExperienceContainer}>
          <div className={styles.TextButton}>
            <div className={styles.ExperienceText}>
              <p className={styles.NameText}>{CVExperience[2].name}</p>
              {isMedium ? (
                <img src={DBPhoto} className={styles.ExperiencePhoto} alt="DBPhoto" />
              ) : null}
              <p className={styles.DescriptionText}>{CVExperience[2].text}</p>
            </div>
            <a href={CVExperience[2].link} target="_blank" rel="noreferrer">
              <button type="submit" className={styles.ExperienceButton}>
                <i className={styles.ButtonText}>View Work</i>
              </button>
            </a>
          </div>
          {!isMedium ? (
            <img src={DBPhoto} className={styles.ExperiencePhoto} alt="DBPhoto" />
          ) : null}
        </div>
      </div>
    </div>
  );
};
