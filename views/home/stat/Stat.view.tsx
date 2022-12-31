import styles from './Stat.module.scss';
import ReactMarkdown from 'react-markdown';
import home from '../../../cms/data/content/home.json';

type Props = {};

const Stat = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.before}>
        <ReactMarkdown>{home.statistic.beforeStatistic}</ReactMarkdown>
      </h1>
      <h1 className={styles.after}>
        <ReactMarkdown>{home.statistic.afterStatistic}</ReactMarkdown>
      </h1>
    </div>
  );
};

export default Stat;
