import styles from './DonateButton.module.scss';
type Props = {};

const DonateButton = (props: Props) => {
  return <button className={styles.donateButton}>Donate</button>;
};

export default DonateButton;
