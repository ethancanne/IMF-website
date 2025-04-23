import Link from 'next/link';
import styles from './DonateButton.module.scss';
type Props = {
  light?: boolean;
  small?: boolean;
};

const DonateButton = (props: Props) => {
  return (
    <Link href={'/donate'}>
      <button
        className={`${styles.donateButton} ${props.light ? styles.light : ''} ${
          props.small ? styles.small : ''
        }`}
      >
        Donate
      </button>
    </Link>
  );
};

export default DonateButton;
