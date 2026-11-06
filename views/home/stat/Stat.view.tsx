import styles from './Stat.module.scss';
import ReactMarkdown from 'react-markdown';
import home from '../../../cms/data/content/home.json';

type Props = {};

const Stat = (props: Props) => {
  return (
    <section className={styles.container}>
      <span className={styles.eyebrow}>50+ Years of Life-Saving Impact</span>
      <div className={styles.grid}>
        <div className={`${styles.statCard} ${styles.before}`}>
          <span className={styles.tag}>Then</span>
          <ReactMarkdown>{home.statistic.beforeStatistic}</ReactMarkdown>
        </div>
        <div className={`${styles.statCard} ${styles.after}`}>
          <span className={styles.tag}>Today</span>
          <ReactMarkdown>{home.statistic.afterStatistic}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default Stat;
