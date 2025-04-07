import styles from './Intro.module.scss';
import Card from '../../../components/card/Card.component';
import home from '../../../cms/data/content/home.json';
type Props = {};

const Intro = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          {home.cards.map((card) => (
            <div className={styles.card} key={card.title}>
              <Card
                title={card.title}
                description={card.description}
                image={card.image}
                cover
              />
            </div>
          ))}
        </div>

        <div className={styles.textContainer}>
          <p>{home.shortDescription.topDescription}</p>
          <p>{home.shortDescription.bottomDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
