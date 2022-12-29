import styles from './Missionaries.module.scss';
import MissionaryItem from './components/missionaryItem/MissionaryItem.component';
import aboutUs from '../../../cms/data/content/aboutUs.json';

type Props = {};

const Missionaries = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Missionaries</h1>
      <div className={styles.missionaries}>
        {aboutUs.missionaries.map((missionary) => (
          <MissionaryItem
            name={missionary.name}
            position={missionary.position}
            description={missionary.description}
            image={missionary.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Missionaries;
