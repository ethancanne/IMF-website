import styles from './MissionTrips.module.scss';
import getInvolved from '../../../cms/data/content/getInvolved.json';
import Video from '../../../components/video/Video.component';

type Props = {};

const MissionTrips = (props: Props) => {
  return (
    <div className={styles.container}>
      {getInvolved.missionTripVideos.map((video) => (
        <div className={styles.video}>
          <h1 className={styles.title}>{video.title}</h1>
          <Video url={video.url} />
        </div>
      ))}
    </div>
  );
};

export default MissionTrips;
