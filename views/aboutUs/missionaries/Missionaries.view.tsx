import styles from './Missionaries.module.scss';
import MissionaryItem from './components/missionaryItem/MissionaryItem.component';
import aboutUs from '../../../cms/data/content/aboutUs.json';

type Props = {};

const Missionaries = (props: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Faithful Service</span>
          <h2 className={styles.title}>Missionaries</h2>
        </div>

        <div className={styles.missionaries}>
          {aboutUs.missionaries.map((missionary) => (
            <MissionaryItem
              key={missionary.name}
              name={missionary.name}
              position={missionary.position}
              description={missionary.description}
              image={missionary.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missionaries;
