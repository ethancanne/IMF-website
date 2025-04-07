import styles from './Video.module.scss';
type Props = {
  url: any;
  iframe?: boolean;
};

const Video = (props: Props) => {
  return (
    <div className={styles.iframeContainer}>
      {props.iframe ? (
        <div className={styles.outerContainer}>
          <iframe
            width="780"
            className={styles.iframe}
            height="439"
            src={props.url}
            title="International Missionary Fellowship - Haiti Hospital, Bombardopolis"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <video controls width="600" className={styles.video}>
          <source src={props.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Video;
