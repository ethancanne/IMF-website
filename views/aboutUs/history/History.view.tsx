import styles from './History.module.scss';
import Image from 'next/image';
import aboutUs from '../../../cms/data/content/aboutUs.json';
import ReactMarkdown from 'react-markdown';

type Props = {};

const History = (props: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Our Roots</span>
          <h2>Our History</h2>
          <div className={styles.description}>
            <ReactMarkdown>{aboutUs.history.description}</ReactMarkdown>
          </div>
        </div>

        <div className={styles.images}>
          {aboutUs.history.images.map((imageItem, index) => {
            const src = imageItem.image.startsWith('/')
              ? imageItem.image
              : `/${imageItem.image}`;
            return (
              <div className={styles.imageFrame} key={src + index}>
                <Image
                  src={src}
                  className={styles.image}
                  alt={`IMF historical photograph ${index + 1}`}
                  width={520}
                  height={360}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default History;
