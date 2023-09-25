import styles from './Video.module.scss';
type Props = {
  url: any;
};

const Video = (props: Props) => {
  return (
    <div className={styles.iframeContainer}>
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
  );
};

export default Video;
