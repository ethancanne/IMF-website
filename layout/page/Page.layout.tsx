import styles from './Page.module.scss';
import NavBar from '../navBar/NavBar.layout';
import Footer from '../../layout/footer/Footer.layout';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Menu from '../menu/Menu.layout';
import Head from 'next/head';
import Header from '../header/Header.layout';
import { motion } from 'framer-motion';
import DonationSuccessModal from '../../components/donationSuccessModal/DonationSuccessModal.component';
type Props = {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
  isSubPage?: boolean;
  image?: string;
};

const Page = (props: Props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isSubtle, setIsSubtle] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsSubtle(window.scrollY < 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pageTitle = props.isSubPage
    ? `${props.title} | IMF - Haiti Hospital`
    : 'IMF - Haiti Hospital';

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <DonationSuccessModal />
      <NavBar
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
        isSubtle={isSubtle && !menuIsOpen}
        setIsSubtle={setIsSubtle}
      />
      <AnimatePresence initial={false} mode="wait">
        {menuIsOpen && <Menu setMenuIsOpen={setMenuIsOpen} />}
      </AnimatePresence>
      <motion.div
        className={styles.pageContainer}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
      >
        <Header
          title={props.title}
          subTitle={props.subTitle}
          donate={!props.isSubPage}
          isSubPage={props.isSubPage}
          image={props.image}
        />
        {props.children}
        <Footer />
      </motion.div>
    </div>
  );
};

export default Page;
