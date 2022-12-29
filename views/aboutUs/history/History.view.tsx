import styles from './History.module.scss';
import Image from 'next/image';
// import aboutUs from '../../../cms/data/content/aboutUs.json';

type Props = {};

const History = (props: Props) => {
  const images = [
    {
      src: '/img/campus.jpeg',
      alt: 'Hospital Evangelique Bombardopolis',
    },
    {
      src: '/img/campus.jpeg',
      alt: 'Hospital Evangelique Bombardopolis',
    },
    {
      src: '/img/campus.jpeg',
      alt: 'Hospital Evangelique Bombardopolis',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>History</h1>
        <p>{/* {aboutUs.history} */}</p>
      </div>
      <div className={styles.images}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            className={styles.image}
            alt={image.alt}
            width={500}
            height={300}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
