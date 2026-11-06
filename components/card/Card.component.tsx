import styles from './Card.module.scss';
import Image from 'next/image';

type Props = {
  title: string;
  description?: string;
  image?: string;
  icon?: React.FC;
  red?: boolean;
  cover?: boolean;
};

const Card = (props: Props) => {
  const imageSrc = props.image
    ? props.image.startsWith('/') || props.image.startsWith('http')
      ? props.image
      : `/${props.image}`
    : null;

  const isTextOnly = !imageSrc && !props.icon && !props.description;

  return (
    <div
      className={`${styles.container} ${props.red ? styles.red : ''} ${
        isTextOnly ? styles.textOnly : ''
      }`}
    >
      {imageSrc && (
        <div
          className={
            props.cover ? styles.coverImageWrapper : styles.iconImageWrapper
          }
        >
          <Image
            src={imageSrc}
            alt={props.title}
            width={400}
            height={props.cover ? 280 : 140}
            className={props.cover ? styles.coverImage : styles.iconImage}
          />
        </div>
      )}
      {props.icon && (
        <div className={styles.icon}>
          <props.icon />
        </div>
      )}
      <div className={styles.info}>
        <h3>{props.title}</h3>
        {props.description && <p>{props.description}</p>}
      </div>
    </div>
  );
};

export default Card;
