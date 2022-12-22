import styles from './Page.module.scss';
import Header from '../header/NavBar.layout';
import Footer from '../../layout/footer/Footer.layout';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Menu from '../menu/Menu.layout';
import Head from 'next/head';
type Props = {
  children: React.ReactNode;
};

const Page = (props: Props) => {
  const [menuIsOpen, setMenuIsOpen] = useState();
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>IMF - Haiti Hospital</title>
      </Head>
      <Header setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
      <AnimatePresence initial={false} mode="wait">
        {menuIsOpen && <Menu setMenuIsOpen={setMenuIsOpen} />}
      </AnimatePresence>
      {props.children}
      <Footer />{' '}
    </div>
  );
};

export default Page;
