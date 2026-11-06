import { useState } from 'react';
import styles from './Feed.module.scss';
import home from '../../../cms/data/content/home.json';
import Video from '../../../components/video/Video.component';
import { FaExternalLinkAlt, FaRegNewspaper } from 'react-icons/fa';

type Props = {};

const Feed = (props: Props) => {
  const [selectedNewsletterLink, setSelectedNewsletterLink] = useState(
    home.newsletters[0]?.link || ''
  );

  const onNewsletterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNewsletterLink(e.target.value);
  };

  const onNewsletterSubmit = () => {
    if (!selectedNewsletterLink) return;
    window.open(selectedNewsletterLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={styles.container}>
      <div className={styles.videoSection}>
        <span className={styles.eyebrow}>See Our Mission in Action</span>
        <h2 className={styles.sectionTitle}>Life &amp; Ministry in Bombardopolis</h2>
        <div className={styles.videoFrame}>
          <Video url="https://www.youtube.com/embed/HVfINeQyhvk" iframe />
        </div>
      </div>

      <div className={styles.newsletterCard}>
        <div className={styles.newsletterHeader}>
          <div className={styles.iconCircle}>
            <FaRegNewspaper />
          </div>
          <div>
            <h3 className={styles.newsletterDropdownTitle}>
              Read Our Newsletters
            </h3>
            <p className={styles.newsletterSubtitle}>
              Catch up on quarterly stories, updates, and prayer requests from
              Haiti.
            </p>
          </div>
        </div>

        <div className={styles.dropdownRow}>
          <select
            id="newsletters"
            name="newsletters"
            aria-label="Select a newsletter issue"
            value={selectedNewsletterLink}
            onChange={onNewsletterChange}
          >
            {home.newsletters.map((newsletter) => (
              <option value={newsletter.link} key={newsletter.link}>
                {newsletter.title}
              </option>
            ))}
          </select>
          <button
            type="button"
            className={styles.button}
            onClick={onNewsletterSubmit}
          >
            <span>Open Issue</span>
            <FaExternalLinkAlt size={13} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feed;
