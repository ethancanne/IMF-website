import styles from './MapCampus.module.scss';
import Image from 'next/image';
import aboutUs from '../../../cms/data/content/aboutUs.json';
import ReactMarkdown from 'react-markdown';

type Props = {};

const MapCampus = (props: Props) => {
  const mapImg = aboutUs.mapAndCampus.map.image.startsWith('/')
    ? aboutUs.mapAndCampus.map.image
    : `/${aboutUs.mapAndCampus.map.image}`;
  const campusImg = aboutUs.mapAndCampus.campus.image.startsWith('/')
    ? aboutUs.mapAndCampus.campus.image
    : `/${aboutUs.mapAndCampus.campus.image}`;

  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Bombardopolis, NW Haiti</span>
          <h2>Map &amp; Campus</h2>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.imageWrapper}>
            <Image
              src={mapImg}
              alt="Aerial view of the 10-acre Hospital Evangelique Bombardopolis campus"
              width={640}
              height={460}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <span className={styles.cardTag}>10-Acre Property</span>
            <h3>Campus Overview</h3>
            <ReactMarkdown>{aboutUs.mapAndCampus.map.description}</ReactMarkdown>
          </div>
        </div>

        <div className={`${styles.featureCard} ${styles.reverse}`}>
          <div className={styles.content}>
            <span className={styles.cardTag}>Main Ministry</span>
            <h3>Hospital Evangelique Bombardopolis</h3>
            <ReactMarkdown>
              {aboutUs.mapAndCampus.campus.description}
            </ReactMarkdown>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={campusImg}
              alt="Hospital Evangelique Bombardopolis building"
              width={640}
              height={460}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapCampus;
