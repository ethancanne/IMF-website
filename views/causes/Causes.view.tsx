import styles from './Causes.module.scss';
import ReactMarkdown from 'react-markdown';
import causes from '../../cms/data/content/causes.json';

type Props = {};

const Causes = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <ReactMarkdown>{causes.topDescription}</ReactMarkdown>
      </h1>
      {causes.causes.map((cause) => (
        <div className={styles.cause}>
          <h1 className={styles.causeTitle}>
            <ReactMarkdown>{cause.title}</ReactMarkdown>
          </h1>
          <p className={styles.description}>
            <ReactMarkdown>{cause.description}</ReactMarkdown>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Causes;
