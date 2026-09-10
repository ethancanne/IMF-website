import styles from './DonateView.module.scss';
import donateInfo from '../../cms/data/content/donate.json';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const DonateView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.waysToGive}>
        <h1 className={styles.title}>{donateInfo.header}</h1>
        <p className={styles.subTitle}>{donateInfo.description}</p>

        <div className={styles.givingOptions}>
          {donateInfo.givingOptions.map((option, index) => (
            <div className={styles.givingCard} key={option.title + index}>
              <div className={styles.titleContainer}>
                <h2>{option.title}</h2>
                {option.image && (
                  <div className={styles.imageContainer}>
                    <Image
                      src={'/' + option.image}
                      alt={option.title}
                      className={styles.image}
                      width={100}
                      height={100}
                    />
                  </div>
                )}
              </div>
              <div className={styles.markdown}>
                <ReactMarkdown>{option.description}</ReactMarkdown>
              </div>
              {option.link && (
                <a href={option.link} target="_blank" rel="noopener noreferrer">
                  {option.linkTitle}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonateView;
