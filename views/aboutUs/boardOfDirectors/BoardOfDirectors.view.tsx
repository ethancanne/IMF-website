import styles from './BoardOfDirectors.module.scss';
import Image from 'next/image';
import Card from '../../../components/card/Card.component';
import aboutUs from '../../../cms/data/content/aboutUs.json';
import ReactMarkdown from 'react-markdown';
type Props = {};

const BoardOfDirectors = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Board of Directors</h1>
      <div className={styles.directors}>
        {aboutUs.boardOfDirectors.map((director) => (
          <Card
            key={director.name}
            title={director.name}
            cover={true}
            description={director.position}
            image={director.image}
          />
        ))}
      </div>
      <div className={styles.staff}>
        <p>
          <ReactMarkdown>{aboutUs.haitianStaff.description}</ReactMarkdown>
        </p>
        <Image
          src={'/' + aboutUs.haitianStaff.image}
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
