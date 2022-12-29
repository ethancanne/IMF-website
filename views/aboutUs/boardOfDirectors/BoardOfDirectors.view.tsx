import styles from './BoardOfDirectors.module.scss';
import Image from 'next/image';
import Card from '../../../components/card/Card.component';

type Props = {};

const BoardOfDirectors = (props: Props) => {
  const directors = [
    {
      name: 'John Doe',
      position: 'President',
      image: '/img/campus.jpeg',
    },
    {
      name: 'John Doe',
      position: 'President',
      image: '/img/campus.jpeg',
    },
    {
      name: 'John Doe',
      position: 'President',
      image: '/img/campus.jpeg',
    },
    {
      name: 'John Doe',
      position: 'President',
      image: '/img/campus.jpeg',
    },
    {
      name: 'John Doe',
      position: 'President',
      image: '/img/campus.jpeg',
    },
    {
      name: 'John Doe',
      position: 'President',
      image: '/img/campus.jpeg',
    },
    {
      name: 'John Doe',
      position: 'President',
      image: '/img/campus.jpeg',
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Board of Directors</h1>
      <div className={styles.directors}>
        {directors.map((director) => (
          <Card
            title={director.name}
            description={director.position}
            image={director.image}
          />
        ))}
      </div>
      <div className={styles.staff}>
        <p>
          It would be a disservice to not mention the Haitian staff serving HEB.
          Nothing we do would be possible without their talents and labors of
          everyone from the medical staff, to the administrative staff, to the
          maintenance staff, to the support staff. They too are an integral part
          of IMF.
        </p>
        <Image
          src="/img/home-header.jpeg"
          alt="Campus"
          width={500}
          height={300}
          className={styles.image}
          style={{
            objectFit: 'cover', //make it responsive
            objectPosition: 'center',
            // width: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default BoardOfDirectors;
