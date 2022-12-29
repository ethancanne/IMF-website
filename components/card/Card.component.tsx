import styles from './Card.module.scss';
import Image from 'next/image';
type Props = {
  title: string;
  description?: string;
  image?: string;
};

const Card = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.image && (
        <Image
          src={props.image}
          alt={props.title}
          width={300}
          height={200}
          style={{
            objectFit: 'cover', //make it responsive
            objectPosition: 'center',
            width: '100%',
          }}
        />
      )}
      <div className={styles.info}>
        <h1>{props.title}</h1>
        {props.description && <p>{props.description}</p>}
      </div>
    </div>
  );
};

export default Card;
