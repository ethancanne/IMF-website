import styles from './MissionTrips.module.scss';
import getInvolved from '../../../cms/data/content/getInvolved.json';
import Video from '../../../components/video/Video.component';

type Props = {};

const MissionTrips = (props: Props) => {
  return (
    <div className={styles.container}>
      {getInvolved.missionTripVideos.map((video) => (
        <Video url={video.videoUrl} />
      ))}
    </div>
  );
};

export default MissionTrips;
