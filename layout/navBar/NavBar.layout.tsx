import styles from './NavBar.module.scss';
type Props = {
  setMenuIsOpen: any;
  menuIsOpen: any;
  isSubtle: boolean;
  setIsSubtle: any;
};
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';
import pages from '../../cms/data/websiteLayout/pages.json';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import aboutAndContact from '../../cms/data/websiteLayout/aboutAndContact.json';
import DonateButton from '../../components/donateButton/DonateButton.component';

const NavBar = (props: Props) => {
  const router = useRouter();
  return (
    <div
      className={`${styles.container} ${props.isSubtle ? styles.subtle : ''}`}
    >
      <Link href="/" className={styles.logo}>
        <Image
          src={`${props.isSubtle ? '/white-logo.png' : '/logo.png'}`}
          width={props.isSubtle ? 200 : 200}
          height={props.isSubtle ? 100 : 70}
          style={{ objectFit: 'contain' }}
          alt="logo"
        />
        <h1>Haiti Hospital</h1>
      </Link>
      <div className={styles.navLinks}>
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

        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          transition={{
            duration: 0.2,
            type: 'spring',
            stiffness: 100,
            damping: 10,
          }}
          onClick={() => {
            props.setMenuIsOpen(!props.menuIsOpen);
            props.setIsSubtle(false);
          }}
          className={styles.menu}
        >
          {props.menuIsOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
