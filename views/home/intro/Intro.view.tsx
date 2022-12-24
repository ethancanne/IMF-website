import styles from './Intro.module.scss';
import Card from '../../../components/card/Card.component';
type Props = {};

const Intro = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          <Card
            title="Health and medicine"
            description=" Provide medical and spiritual care to the more than 50,000 individuals
        and families of rural northwestern Haiti, including premature and low
        birth-weight infants and new mothers."
            image="/img/home-card-health.jpeg"
          />
          <Card
            title="Health and medicine"
            description=" Provide medical and spiritual care to the more than 50,000 individuals
        and families of rural northwestern Haiti, including premature and low
        birth-weight infants and new mothers."
            image="/img/home-card-health.jpeg"
          />
          <Card
            title="Health and medicine"
            description=" Provide medical and spiritual care to the more than 50,000 individuals
      and families of rural northwestern Haiti, including premature and low
      birth-weight infants and new mothers."
            image="/img/home-card-health.jpeg"
          />
        </div>

        <div className={styles.textContainer}>
          <p>
            We serve a population of about 50,000 in Bombardopolis, a remote
            area of Northwest Haiti that is notoriously poor and unsettled.
          </p>
          <p>
            Our challenges are practical as well as spiritual, yet we endeavor
            to show the love of God as we meet basic needs of people in Jesus’
            name. For 50 years we have been the only consistent source of
            healthcare in the area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
