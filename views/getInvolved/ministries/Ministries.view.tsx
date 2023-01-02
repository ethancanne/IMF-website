import styles from './Ministries.module.scss';
import MinistryItem from './components/ministryItem/MinistryItem.component';
import DonateButton from '../../../components/donateButton/DonateButton.component';
type Props = {};

const Ministries = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Assist these critical ministries through <br />
        <span>action, fundraising, and prayer!</span>
      </h1>

      <div className={styles.ministries}>
        <MinistryItem
          image="/img/campus.jpeg"
          name="Children's Ministry"
          description="The Children's Ministry is a place where children can learn about God and have fun at the same time. We have a variety of activities for children of all ages."
          budget="$1,000"
        />
        <MinistryItem
          image="/img/campus.jpeg"
          name="Children's Ministry"
          description="The Children's Ministry is a place where children can learn about God and have fun at the same time. We have a variety of activities for children of all ages."
          budget="$1,000"
        />
        <MinistryItem
          image="/img/campus.jpeg"
          name="Children's Ministry"
          description="The Children's Ministry is a place where children can learn about God and have fun at the same time. We have a variety of activities for children of all ages."
          budget="$1,000"
        />

        <MinistryItem
          image="/img/campus.jpeg"
          name="Children's Ministry"
          description="The Children's Ministry is a place where children can learn about God and have fun at the same time. We have a variety of activities for children of all ages."
          budget="$1,000"
        />
        <MinistryItem
          image="/img/campus.jpeg"
          name="Children's Ministry"
          description="The Children's Ministry is a place where children can learn about God and have fun at the same time. We have a variety of activities for children of all ages."
          budget="$1,000"
        />
        <MinistryItem
          image="/img/campus.jpeg"
          name="Children's Ministry"
          description="The Children's Ministry is a place where children can learn about God and have fun at the same time. We have a variety of activities for children of all ages."
          budget="$1,000"
        />
      </div>
      <div className={styles.donate}>
        <DonateButton />
      </div>
      <p className={styles.disclaimer}>
        Whether you give by card or check, your dollars make a difference to the
        lives of those in Bombardopolis. Please make checks out to International
        Missionary Fellowship and mail to PO Box 5226, Largo, FL 33779-5226
      </p>
    </div>
  );
};

export default Ministries;
