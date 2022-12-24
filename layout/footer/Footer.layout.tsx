import styles from './Footer.module.scss';
import DonateButton from '../../components/donateButton/DonateButton.component';
import Image from 'next/image';
import { FaFacebook } from 'react-icons/fa';

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
            <p>
              For 40 years we’ve served a population of about 50,000 in a remote
              area of Northwest Haiti — notoriously poor and unsettled.
              Challenges in Bombardopolis include practical as well as
              spiritual, and we endeavor to show the love of God as we meet
              basic needs for these folks in Jesus' name.
            </p>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contact}>
            <h1>Write us</h1>
            <p>PO Box 5226, Largo, FL 33779-5226</p>
          </div>
          <div className={styles.contact}>
            <h1>Email Us</h1>
            <p>info@haitihospital.org</p>
          </div>
          <div className={styles.social}>
            <FaFacebook className={styles.facebook} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
