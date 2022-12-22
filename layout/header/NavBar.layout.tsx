import styles from './NavBar.module.scss';
type Props = {
  setMenuIsOpen: any;
  menuIsOpen: any;
};
import { BsGridFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const NavBar = (props: Props) => {
  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
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
    </>
  );
};

export default NavBar;
