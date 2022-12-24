import styles from './Stat.module.scss';

type Props = {};

const Stat = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.before}>
        <span>Before 1970, over 70%</span> of babies and many mothers Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </h1>
      <h1 className={styles.after}>
        <span>Now, less than 5% </span>Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </h1>
    </div>
  );
};

export default Stat;
