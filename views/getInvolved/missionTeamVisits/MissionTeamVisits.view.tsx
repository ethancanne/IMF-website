import styles from './MissionTeamVisits.module.scss';
import Image from 'next/image';
import { m } from 'framer-motion';
import getInvolved from '../../../cms/data/content/getInvolved.json';

type Props = {};

const MissionTeamVisits = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mission Team Visits</h1>
      <div className={styles.imageContainer}>
        {getInvolved.missionTeamVisitsImages.map((i) => (
          <>
            <Image
              src={'/' + i.image}
              alt={i.altText}
              width={250}
              height={250}
              className={styles.image}
              style={{ objectFit: 'cover' }}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default MissionTeamVisits;
