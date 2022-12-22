import styles from './NavBar.module.scss';
type Props = {
  setMenuIsOpen: any;
  menuIsOpen: any;
};
import { BsGridFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import pages from '../../cms/data/websiteLayout/pages.json';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const NavBar = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            width={200}
            height={70}
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
          <button className={styles.donateButton}>Donate</button>

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
            onClick={() => props.setMenuIsOpen(!props.menuIsOpen)}
            className={styles.menu}
          >
            <BsGridFill />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
