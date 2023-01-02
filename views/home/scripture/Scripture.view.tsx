import styles from './Scripture.module.scss';

type Props = {};

const Scripture = (props: Props) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url('/img/campus.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>We serve because</h1>
          <p>scriptures say...</p>
        </div>
        <div className={styles.scriptureContainer}>
          <p>
            For I was hungry and you gave me something to eat, I was thirsty and
            you gave me something to drink, I was a stranger and you invited me
            in… The King will reply, ‘Truly I tell you, whatever you did for one
            of the least of these brothers and sisters of mine, you did for me.’
          </p>
          <p className={styles.reference}>Matthew 25:35-40</p>
        </div>
      </div>
    </div>
  );
};

export default Scripture;
