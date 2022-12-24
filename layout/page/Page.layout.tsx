import styles from './Page.module.scss';
import NavBar from '../navBar/NavBar.layout';
import Footer from '../../layout/footer/Footer.layout';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Menu from '../menu/Menu.layout';
import Head from 'next/head';
import Header from '../header/Header.layout';
import { motion } from 'framer-motion';
type Props = {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
  isSubPage?: boolean;
  image?: string;
};

const Page = (props: Props) => {
  const [menuIsOpen, setMenuIsOpen] = useState();
  const [isSubtle, setIsSubtle] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY < 20) setIsSubtle(true);
      else setIsSubtle(false);
    };
  }, []);

  return (
    <motion.div
      className={styles.pageContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0,
        type: 'spring',
        stiffness: 100,
      }}
    >
      <Head>
        <title>IMF - Haiti Hospital</title>
      </Head>
      <NavBar
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
        isSubtle={isSubtle}
      />
      <AnimatePresence initial={false} mode="wait">
        {menuIsOpen && <Menu setMenuIsOpen={setMenuIsOpen} />}
      </AnimatePresence>
      <Header
        title={props.title}
        subTitle={props.subTitle}
        donate={!props.isSubPage}
        isSubPage={props.isSubPage}
        image={props.image}
      />
      {props.children}
      <Footer />{' '}
    </motion.div>
  );
};

export default Page;
