import styles from './DonateButton.module.scss';
type Props = {
  light?: boolean;
};

const DonateButton = (props: Props) => {
  return (
    <button
      className={`${styles.donateButton} ${props.light ? styles.light : ''}`}
    >
      Donate
    </button>
  );
};

export default DonateButton;
