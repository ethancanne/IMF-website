import styles from './Intro.module.scss';
import aboutUs from '../../../cms/data/content/aboutUs.json';
import ReactMarkdown from 'react-markdown';

type Props = {};

const Intro = (props: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>501(c)(3) Christian Nonprofit</span>
        <h2 className={styles.title}>
          International <span>Missionary</span> Fellowship
        </h2>
        <p className={styles.subTitle}>Hospital Evangelique de Bombardopolis</p>
        <div className={styles.content}>
          <ReactMarkdown>{aboutUs.intro}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default Intro;
