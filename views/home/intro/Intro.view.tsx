import styles from './Intro.module.scss';
type Props = {};

const Intro = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>Intro</div>
    </div>
  );
};

export default Intro;
