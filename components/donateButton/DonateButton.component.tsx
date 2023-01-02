import styles from './DonateButton.module.scss';
import aboutAndContact from '../../cms/data/websiteLayout/aboutAndContact.json';
type Props = {
  light?: boolean;
};

const DonateButton = (props: Props) => {
  return (
    <button
      className={`${styles.donateButton} ${props.light ? styles.light : ''}`}
    >
      <a href={aboutAndContact.donateLink}>Donate</a>
    </button>
  );
};

export default DonateButton;
