import styles from './HelpAreas.module.scss';
import Card from '../../../components/card/Card.component';
import getInvolved from '../../../cms/data/content/getInvolved.json';

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

      <p className={styles.missionTeamDescription}>
        {getInvolved.helpAreasDescription}
      </p>

      <div className={styles.helpAreaCards}>
        {getInvolved.helpAreas.map((helpArea) => (
          <Card
            title={helpArea.title}
            description={helpArea.description}
            image={helpArea.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default HelpAreas;
