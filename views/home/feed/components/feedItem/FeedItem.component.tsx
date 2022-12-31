import styles from './FeedItem.module.scss';

type Props = {
  title: string;
  image?: string;
  date: string;
};

const FeedItem = (props: Props) => {
  return (
    <div
      className={styles.container}
      style={{
        background: `url(${props.image}) #bc4e4ea5`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply',
      }}
    >
      <h1 className={styles.title}>{props.title}</h1>

      <div className={styles.info}>
        <p className={styles.date}>{props.date}</p>
      </div>
    </div>
  );
};

export default FeedItem;
