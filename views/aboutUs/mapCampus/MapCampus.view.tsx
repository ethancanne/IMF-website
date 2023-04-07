import styles from './MapCampus.module.scss';
import Image from 'next/image';
import aboutUs from '../../../cms/data/content/aboutUs.json';
import ReactMarkdown from 'react-markdown';

type Props = {};

const MapCampus = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1>Map and Campus</h1>

      <div className={styles.section}>
        <Image
          src={'/' + aboutUs.mapAndCampus.map.image}
          alt="Map of Hospital Evangelique Bombardopolis"
          width={800}
          height={800}
          className={styles.image}
        />
        <p className={styles.content}>
          <ReactMarkdown>{aboutUs.mapAndCampus.map.description}</ReactMarkdown>
        </p>
      </div>

      <div className={styles.section}>
        <p className={styles.content}>
          <ReactMarkdown>
            {aboutUs.mapAndCampus.campus.description}
          </ReactMarkdown>
        </p>
        <Image
          src={'/' + aboutUs.mapAndCampus.campus.image}
          alt="Map of Hospital Evangelique Bombardopolis"
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default MapCampus;
