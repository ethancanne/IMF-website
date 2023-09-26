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
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.name}>{props.name}</h1>
        <h2 className={styles.position}>{props.position}</h2>
        <p className={styles.description}>
          <ReactMarkdown>{props.description}</ReactMarkdown>
        </p>
      </div>

      <Image
        src={'/' + props.image}
        alt={props.name}
        className={styles.image}
        width={300}
        height={350}
        style={{
          objectFit: 'cover', //make it responsive
          objectPosition: 'top',
          // width: '100%',
        }}
      />
    </div>
  );
};

export default MissionaryItem;
