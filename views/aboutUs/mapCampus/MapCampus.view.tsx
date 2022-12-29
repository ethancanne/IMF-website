import styles from './MapCampus.module.scss';
import Image from 'next/image';
import aboutUs from '../../../cms/data/content/aboutUs.json';

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
        <p className={styles.content}>{aboutUs.mapAndCampus.map.description}</p>
      </div>

      <div className={styles.section}>
        <p className={styles.content}>
          {aboutUs.mapAndCampus.campus.description}
        </p>
        <Image
          src={'/' + aboutUs.mapAndCampus.campus.image}
          alt="Map of Hospital Evangelique Bombardopolis"
          width={800}
          height={800}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default MapCampus;
