import styles from './EnabledToDo.module.scss';
import Card from '../../../components/card/Card.component';
import aboutUs from '../../../cms/data/content/aboutUs.json';

type Props = {};

const EnabledToDo = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What the Lord has enabled us to do</h1>
      <div className={styles.enabledItems}>
        {aboutUs.enabledToDo.map((enabled) => (
          <Card title={enabled.description} />
        ))}
      </div>
    </div>
  );
};

export default EnabledToDo;
