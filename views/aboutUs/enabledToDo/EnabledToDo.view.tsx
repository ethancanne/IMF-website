import styles from './EnabledToDo.module.scss';
import Card from '../../../components/card/Card.component';

type Props = {};

const EnabledToDo = (props: Props) => {
  const enabledToDo = [
    {
      content: 'Over 50% of blank happened',
    },
    {
      content: 'Over 50% of blank happened',
    },
    {
      content: 'Over 50% of blank happened',
    },
    {
      content: 'Over 50% of blank happened',
    },
    {
      content: 'Over 50% of blank happened',
    },
    {
      content: 'Over 50% of blank happened',
    },
    {
      content: 'Over 50% of blank happened',
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What the Lord has enabled us to do</h1>
      <div className={styles.enabledItems}>
        {enabledToDo.map((enabled) => (
          <Card title={enabled.content} />
        ))}
      </div>
    </div>
  );
};

export default EnabledToDo;
