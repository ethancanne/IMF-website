import styles from './History.module.scss';
import Image from 'next/image';
import aboutUs from '../../../cms/data/content/aboutUs.json';

type Props = {};

const History = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>History</h1>
        <p>{aboutUs.history.description}</p>
      </div>
      <div className={styles.images}>
        {aboutUs.history.images.map((imageItem, index) => (
          <Image
            key={index}
            src={'/' + imageItem.image}
            className={styles.image}
            alt={'History Image'}
            width={500}
            height={300}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
