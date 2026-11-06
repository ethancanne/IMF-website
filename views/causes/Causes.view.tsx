import styles from './Causes.module.scss';
import ReactMarkdown from 'react-markdown';
import causes from '../../cms/data/content/causes.json';
import {
  FaBookOpen,
  FaGraduationCap,
  FaHandsHelping,
  FaHome,
  FaSeedling,
  FaStethoscope,
  FaTint,
} from 'react-icons/fa';

type Props = {};

const getCauseIcon = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes('medical') || lower.includes('hospital')) return FaStethoscope;
  if (lower.includes('widow') || lower.includes('home')) return FaHome;
  if (lower.includes('tree') || lower.includes('fruit') || lower.includes('food'))
    return FaSeedling;
  if (lower.includes('water') || lower.includes('cistern')) return FaTint;
  if (lower.includes('evangelism') || lower.includes('bible')) return FaBookOpen;
  if (lower.includes('education') || lower.includes('school'))
    return FaGraduationCap;
  return FaHandsHelping;
};

const Causes = (props: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.introBlock}>
          <span className={styles.eyebrow}>Our Ministries</span>
          <div className={styles.topDescription}>
            <ReactMarkdown>{causes.topDescription}</ReactMarkdown>
          </div>
        </div>

        <div className={styles.causesGrid}>
          {causes.causes.map((cause, index) => {
            const Icon = getCauseIcon(cause.title);
            return (
              <article className={styles.causeCard} key={cause.title + index}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBadge}>
                    <Icon />
                  </div>
                  <div className={styles.causeTitle}>
                    <ReactMarkdown>{cause.title}</ReactMarkdown>
                  </div>
                </div>
                <div className={styles.description}>
                  <ReactMarkdown>{cause.description}</ReactMarkdown>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Causes;
