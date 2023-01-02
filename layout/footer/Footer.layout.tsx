import styles from './Footer.module.scss';
import DonateButton from '../../components/donateButton/DonateButton.component';
import Image from 'next/image';
import { FaFacebook } from 'react-icons/fa';
import aboutAndContact from '../../cms/data/websiteLayout/aboutAndContact.json';
import { BsFacebook } from 'react-icons/bs';

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className={styles.getInvolvedContainer}>
        <h1>Get Involved. Make a Difference.</h1>
        <p>
          Your prayers and gifts of time and money directly impact the quality
          of life in Bombardopolis!
        </p>
        <DonateButton light={false} />
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.aboutContainer}>
          <Image
            src="/logo.png"
            width={200}
            height={100}
            alt="Logo"
            style={{ objectFit: 'contain' }}
            className={styles.logo}
          />
          <div className={styles.about}>
            <h1>About</h1>
            <p>{aboutAndContact.about}</p>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contact}>
            <h1>Write us</h1>
            <p>{aboutAndContact.mailingAddress}</p>
          </div>
          <div className={styles.contact}>
            <h1>Email Us</h1>
            <p>{aboutAndContact.email}</p>
          </div>
          <div className={styles.social}>
            <a href={aboutAndContact.facebookLink}>
              <FaFacebook className={styles.facebook} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
