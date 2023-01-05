import styles from './MinistryItem.module.scss';
import Image from 'next/image';

type Props = {
  image: string;
  name: string;
  description: string;
  budget: Number;
};

const MinistryItem = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={'/' + props.image}
          className={styles.image}
          width={300}
          height={200}
          alt={props.name}
          style={{
            objectFit: 'cover', //make it responsive
            objectPosition: 'center',
          }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{props.name}</h3>
        <div className={styles.budgetContainer}>
          <div></div>
          <p className={styles.budgetWord}>Annual Budget</p>
          <div></div>
        </div>

        <p className={styles.budget}>${props.budget.toLocaleString()}</p>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default MinistryItem;
