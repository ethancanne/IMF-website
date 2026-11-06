import styles from './NavBar.module.scss';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';
import pages from '../../cms/data/websiteLayout/pages.json';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import DonateButton from '../../components/donateButton/DonateButton.component';

type Props = {
  setMenuIsOpen: (open: boolean) => void;
  menuIsOpen: boolean;
  isSubtle: boolean;
  setIsSubtle: (subtle: boolean) => void;
};

const NavBar = (props: Props) => {
  const router = useRouter();
  return (
    <header
      className={`${styles.container} ${props.isSubtle ? styles.subtle : ''}`}
    >
      <Link
        href="/"
        className={styles.logo}
        onClick={() => props.setMenuIsOpen(false)}
      >
        <Image
          src={props.isSubtle ? '/white-logo.png' : '/logo.png'}
          width={180}
          height={64}
          style={{ objectFit: 'contain' }}
          alt="IMF Haiti Hospital logo"
          priority
        />
        <span className={styles.brandSubtitle}>Haiti Hospital</span>
      </Link>

      <nav className={styles.navLinks} aria-label="Main navigation">
        {pages.pages.map((page, index) => (
          <Link
            href={page.link}
            key={index}
            className={`${styles.link} ${
              router.pathname === page.link ? styles.active : ''
            }`}
          >
            {page.title}
          </Link>
        ))}

        <div className={styles.donate}>
          <DonateButton light={props.isSubtle} small />
        </div>

        <motion.button
          type="button"
          aria-label={props.menuIsOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={props.menuIsOpen}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{
            duration: 0.2,
            type: 'spring',
            stiffness: 200,
            damping: 16,
          }}
          onClick={() => {
            const next = !props.menuIsOpen;
            props.setMenuIsOpen(next);
            if (next) props.setIsSubtle(false);
          }}
          className={styles.menu}
        >
          {props.menuIsOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </motion.button>
      </nav>
    </header>
  );
};

export default NavBar;
