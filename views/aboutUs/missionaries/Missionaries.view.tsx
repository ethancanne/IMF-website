import styles from './Missionaries.module.scss';
import MissionaryItem from './components/missionaryItem/MissionaryItem.component';
type Props = {};

const Missionaries = (props: Props) => {
  const missionaries = [
    {
      name: 'Dr. John and Dr. Mary',
      position: 'Director',
      description:
        'Steve and Faith Leach, who served as IMF’s missionaries for more than 20 years, recently returned home to the States from Bombardopolis. During their tenure they were aided at various times by fellow missionaries most notably Dan and Sharon Beardsley, and Betsy Rennells. Their service and commitment to the Lord and the people of Bombardopolis saw them through many challenges and helped bring about many victories. Steve and Faith also raised their 4 children while serving. We thank the Lord for their faithful service.',
      image: '/img/campus.jpeg',
    },
    {
      name: 'Dr. John and Dr. Mary',
      position: 'Director',
      description:
        'Steve and Faith Leach, who served as IMF’s missionaries for more than 20 years, recently returned home to the States from Bombardopolis. During their tenure they were aided at various times by fellow missionaries most notably Dan and Sharon Beardsley, and Betsy Rennells. Their service and commitment to the Lord and the people of Bombardopolis saw them through many challenges and helped bring about many victories. Steve and Faith also raised their 4 children while serving. We thank the Lord for their faithful service.',
      image: '/img/campus.jpeg',
    },
    {
      name: 'Dr. John and Dr. Mary',
      position: 'Director',

      description:
        'Steve and Faith Leach, who served as IMF’s missionaries for more than 20 years, recently returned home to the States from Bombardopolis. During their tenure they were aided at various times by fellow missionaries most notably Dan and Sharon Beardsley, and Betsy Rennells. Their service and commitment to the Lord and the people of Bombardopolis saw them through many challenges and helped bring about many victories. Steve and Faith also raised their 4 children while serving. We thank the Lord for their faithful service.',
      image: '/img/campus.jpeg',
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Missionaries</h1>
      <div className={styles.missionaries}>
        {missionaries.map((missionary) => (
          <MissionaryItem
            name={missionary.name}
            position={missionary.position}
            description={missionary.description}
            image={missionary.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Missionaries;
