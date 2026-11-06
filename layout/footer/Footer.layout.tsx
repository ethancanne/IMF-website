import styles from './Footer.module.scss';
import DonateButton from '../../components/donateButton/DonateButton.component';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaEnvelope, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import aboutAndContact from '../../cms/data/websiteLayout/aboutAndContact.json';
import pages from '../../cms/data/websiteLayout/pages.json';

type Props = {};

const Footer = (props: Props) => {
  const router = useRouter();
  const isDonatePage = router.pathname === '/donate';
  const emails = (aboutAndContact.email || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerRoot}>
      {!isDonatePage && (
        <div className={styles.getInvolvedContainer}>
          <div className={styles.ctaInner}>
            <h2>Get Involved. Make a Difference.</h2>
            <p>
              Your prayers and gifts of time and money directly impact the
              quality of life in Bombardopolis!
            </p>
            <DonateButton light={false} />
          </div>
        </div>
      )}

      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/logo.png"
                width={185}
                height={72}
                alt="International Missionary Fellowship logo"
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className={styles.aboutText}>{aboutAndContact.about}</p>
          </div>

          <div className={styles.linksCol}>
            <h3>Explore</h3>
            <ul>
              {pages.pages.map((page) => (
                <li key={page.link}>
                  <Link href={page.link}>{page.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/donate" className={styles.donateLink}>
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.contactCol}>
            <h3>Contact Us</h3>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <div>
                <span className={styles.contactLabel}>Write Us</span>
                <p>{aboutAndContact.mailingAddress}</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <div>
                <span className={styles.contactLabel}>Email Us</span>
                <div className={styles.emailList}>
                  {emails.map((email) => (
                    <a key={email} href={`mailto:${email}`}>
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {aboutAndContact.facebookLink && (
              <div className={styles.socialRow}>
                <a
                  href={aboutAndContact.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.facebookBtn}
                  aria-label="Follow International Missionary Fellowship on Facebook"
                >
                  <FaFacebook />
                  <span>Follow on Facebook</span>
                </a>
              </div>
            )}
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>
            &copy; {currentYear} International Missionary Fellowship &bull;
            Hospital Evangelique de Bombardopolis
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
