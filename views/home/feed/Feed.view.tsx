import { useState } from 'react';
import styles from './Feed.module.scss';
import FeedItem from './components/feedItem/FeedItem.component';
import home from '../../../cms/data/content/home.json';

type Props = {};

const Feed = (props: Props) => {
  const [selectedNewsletterLink, setSelectedNewsletterLink] = useState(
    home.newsletters[0].link
  );

  const onNewsletterChange = (e: any) => {
    console.log(e.target.value);
    setSelectedNewsletterLink(e.target.value);
  };

  const onNewsletterSubmit = () => {
    (window.location as any) = selectedNewsletterLink;
  };

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>Stay Updated</h1>
      <div className={styles.feed}>
        <FeedItem
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies"
          image="/img/campus.jpeg"
          date="June 1, 2021"
        />
      </div> */}

      <div className={styles.iframeContainer}>
        <iframe
          width="780"
          className={styles.iframe}
          height="439"
          src="https://www.youtube.com/embed/HVfINeQyhvk"
          title="International Missionary Fellowship - Haiti Hospital, Bombardopolis"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.newsletterDropdownContainer}>
        <h1 className={styles.newsletterDropdownTitle}>
          Checkout our newsletter
        </h1>
        <div className={styles.dropdown}>
          <select
            id="newsletters"
            name="newsletters"
            onChange={onNewsletterChange}
          >
            {home.newsletters.map((newsletter) => (
              <option value={newsletter.link}>{newsletter.title}</option>
            ))}
          </select>
          <button className={styles.button} onClick={onNewsletterSubmit}>
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
