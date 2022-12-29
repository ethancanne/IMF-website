import styles from './MapCampus.module.scss';
import Image from 'next/image';

type Props = {};

const MapCampus = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1>Map and Campus</h1>

      <div className={styles.section}>
        <Image
          src="/img/campus.jpeg"
          alt="Map of Hospital Evangelique Bombardopolis"
          width={800}
          height={800}
          className={styles.image}
        />
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent
          elementum facilisis leo vel fringilla est ullamcorper eget. Ante in
          nibh mauris cursus mattis molestie a. Adipiscing at in tellus integer
          feugiat scelerisque varius morbi. Ac turpis egestas sed tempus urna.
          Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam
          quis. Aliquam vestibulum morbi blandit cursus risus at ultrices mi.
          Adipiscing elit duis tristique sollicitudin nibh sit amet. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a. Semper risus in
          hendrerit gravida rutrum quisque. Eget duis at tellus at urna
          condimentum mattis pellentesque. Dapibus ultrices in iaculis nunc sed
          augue lacus viverra vitae.
        </p>
      </div>

      <div className={styles.section}>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent
          elementum facilisis leo vel fringilla est ullamcorper eget. Ante in
          nibh mauris cursus mattis molestie a. Adipiscing at in tellus integer
          feugiat scelerisque varius morbi. Ac turpis egestas sed tempus urna.
          Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam
          quis. Aliquam vestibulum morbi blandit cursus risus at ultrices mi.
          Adipiscing elit duis tristique sollicitudin nibh sit amet. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a. Semper risus in
          hendrerit gravida rutrum quisque. Eget duis at tellus at urna
          condimentum mattis pellentesque. Dapibus ultrices in iaculis nunc sed
          augue lacus viverra vitae.
        </p>
        <Image
          src="/img/campus.jpeg"
          alt="Map of Hospital Evangelique Bombardopolis"
          width={800}
          height={800}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default MapCampus;
