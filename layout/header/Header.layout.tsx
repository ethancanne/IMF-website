import DonateButton from '../../components/donateButton/DonateButton.component';
import styles from './Header.module.scss';

type Props = {
  title: string;
  subTitle?: string;
  donate?: boolean;
  isSubPage?: boolean;
  image?: string;
};

const Header = (props: Props) => {
  const imageSrc = props.image
    ? props.image.startsWith('/') || props.image.startsWith('http')
      ? props.image
      : `/${props.image}`
    : '';

  return (
    <div
      className={`${styles.container} ${props.isSubPage ? styles.subPage : ''}`}
      style={{
        backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
      }}
    >
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.subTitle}>{props.subTitle}</p>
      </div>
      {props.donate && <DonateButton light={true} />}
    </div>
  );
};

export default Header;
