import styles from './HelpAreas.module.scss';

type Props = {};

const HelpAreas = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          Pray. Give. <span>Go.</span>
        </h1>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Use your gifts and talents to further God's kingdom in
            Bombardopolis.
          </p>
          <p className={styles.subDescription}>
            We've been praying for someone just like you to be led to this
            calling!
          </p>
        </div>
      </div>

      <hr />
      <p className={styles.missionTeamDescription}>
        IMF welcomes organized mission teams that want to come and serve area
        needs. It is our intention to use local workers for most of our needs;
        this helps the local economy and gives the locals much needed resources.
        The campus at Bombardopolis can use help from mission teams in three
        areas. Dentistry/Eye Care/ Specific Trades.
      </p>
    </div>
  );
};

export default HelpAreas;
