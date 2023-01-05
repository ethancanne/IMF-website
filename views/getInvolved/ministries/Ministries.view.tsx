import styles from './Ministries.module.scss';
import MinistryItem from './components/ministryItem/MinistryItem.component';
import DonateButton from '../../../components/donateButton/DonateButton.component';
import getInvolved from '../../../cms/data/content/getInvolved.json';
type Props = {};

const Ministries = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Assist these critical ministries through <br />
        <span>action, fundraising, and prayer!</span>
      </h1>

      <div className={styles.ministries}>
        {getInvolved.missions.map((mission) => (
          <MinistryItem
            image={mission.image}
            name={mission.title}
            description={mission.description}
            budget={mission.budget}
          />
        ))}
      </div>
      <div className={styles.donate}>
        <DonateButton />
      </div>
      <p className={styles.disclaimer}>{getInvolved.disclaimer}</p>
    </div>
  );
};

export default Ministries;
