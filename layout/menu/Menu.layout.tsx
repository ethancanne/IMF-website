import React, { useEffect } from 'react';
import styles from './Menu.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import pages from '../../cms/data/websiteLayout/pages.json';
import DonateButton from '../../components/donateButton/DonateButton.component';

type Props = {
  setMenuIsOpen: (open: boolean) => void;
};

const Menu = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <motion.div
      key="mobile-nav-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={styles.container}
    >
      <div className={styles.menuItems}>
        {pages.pages.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{
              type: 'spring',
              stiffness: 220,
              damping: 22,
              delay: index * 0.04,
            }}
          >
            <Link
              href={item.link}
              className={`${styles.menuItem} ${
                router.pathname === item.link ? styles.active : ''
              }`}
              onClick={() => props.setMenuIsOpen(false)}
            >
              {item.title}
            </Link>
          </motion.div>
        ))}

        <motion.div
          className={styles.donateWrapper}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ delay: pages.pages.length * 0.04 + 0.05 }}
          onClick={() => props.setMenuIsOpen(false)}
        >
          <DonateButton />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Menu;
