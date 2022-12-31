import styles from './Intro.module.scss';
import aboutUs from '../../../cms/data/content/aboutUs.json';
import ReactMarkdown from 'react-markdown';

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>International Missionary Fellowship</h1>
      <h4 className={styles.subTitle}>Haiti Hospital</h4>
      <p className={styles.content}>
        <ReactMarkdown>{aboutUs.intro}</ReactMarkdown>
      </p>
    </div>
  );
};

export default Intro;
