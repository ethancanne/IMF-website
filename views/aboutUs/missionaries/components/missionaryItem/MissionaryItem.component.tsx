import styles from './MissionaryItem.module.scss';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

type Props = {
  name: string;
  position: string;
  description: string;
  image: string;
};

const MissionaryItem = (props: Props) => {
  const imageSrc = props.image.startsWith('/')
    ? props.image
    : `/${props.image}`;

  return (
    <article className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={props.name}
          className={styles.image}
          width={320}
          height={360}
        />
      </div>

      <div className={styles.content}>
        <span className={styles.position}>{props.position}</span>
        <h3 className={styles.name}>{props.name}</h3>
        <div className={styles.description}>
          <ReactMarkdown>{props.description}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default MissionaryItem;
