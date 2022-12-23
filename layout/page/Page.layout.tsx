import styles from './Page.module.scss';
import NavBar from '../navBar/NavBar.layout';
import Footer from '../../layout/footer/Footer.layout';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Menu from '../menu/Menu.layout';
import Head from 'next/head';
type Props = {
  children: React.ReactNode;
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
    <div className={styles.pageContainer}>
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
      {props.children}
      <Footer />{' '}
    </div>
  );
};

export default Page;
