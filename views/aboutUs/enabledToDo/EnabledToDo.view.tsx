import styles from './EnabledToDo.module.scss';
import aboutUs from '../../../cms/data/content/aboutUs.json';
import { FaCheckCircle } from 'react-icons/fa';

type Props = {};

const EnabledToDo = (props: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Fruit of the Ministry</span>
          <h2 className={styles.title}>What the Lord Has Enabled Us to Do</h2>
        </div>

        <div className={styles.enabledItems}>
          {aboutUs.enabledToDo.map((enabled, index) => (
            <div className={styles.itemCard} key={enabled.description + index}>
              <FaCheckCircle className={styles.checkIcon} />
              <p>{enabled.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnabledToDo;
