import styles from './Card.module.scss';
import Image from 'next/image';
import { Component } from 'react';
type Props = {
  title: string;
  description?: string;
  image?: string;
  icon?: React.FC;
  red?: boolean;
};

const Card = (props: Props) => {
  return (
    <div className={`${styles.container} ${props.red && styles.red}`}>
      {props.image && (
        <Image
          src={'/' + props.image}
          alt={props.title}
          width={300}
          height={400}
          style={{
            objectFit: 'cover', //make it responsive
            objectPosition: 'center',
            width: '100%',
          }}
        />
      )}
      {props.icon && (
        <div className={styles.icon}>
          <props.icon />
        </div>
      )}
      <div className={styles.info}>
        <h1>{props.title}</h1>
        {props.description && <p>{props.description}</p>}
      </div>
    </div>
  );
};

export default Card;
