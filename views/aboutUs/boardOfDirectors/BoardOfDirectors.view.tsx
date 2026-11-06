import styles from './BoardOfDirectors.module.scss';
import Image from 'next/image';
import aboutUs from '../../../cms/data/content/aboutUs.json';
import ReactMarkdown from 'react-markdown';
import { FaEnvelope } from 'react-icons/fa';

type Props = {};

const parsePosition = (raw: string) => {
  const emailMatch = raw.match(
    /\(?([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\)?/
  );
  if (!emailMatch) {
    return { role: raw.trim(), email: null };
  }
  const email = emailMatch[1];
  const role = raw.replace(emailMatch[0], '').trim();
  return { role: role || 'Board Member', email };
};

const getInitials = (name: string) => {
  const cleaned = name.replace(/\(.*?\)/g, '').trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'IMF';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const BoardOfDirectors = (props: Props) => {
  const staffImg = aboutUs.haitianStaff.image.startsWith('/')
    ? aboutUs.haitianStaff.image
    : `/${aboutUs.haitianStaff.image}`;

  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Leadership</span>
          <h2 className={styles.title}>Board of Directors</h2>
        </div>

        <div className={styles.directors}>
          {aboutUs.boardOfDirectors.map((director) => {
            const { role, email } = parsePosition(director.position || '');
            const isPlaceholder =
              !director.image || director.image.includes('placeholder');
            const imgSrc = director.image?.startsWith('/')
              ? director.image
              : `/${director.image}`;

            return (
              <div className={styles.directorCard} key={director.name}>
                <div className={styles.photoArea}>
                  {isPlaceholder ? (
                    <div className={styles.initialsAvatar}>
                      <span>{getInitials(director.name)}</span>
                    </div>
                  ) : (
                    <Image
                      src={imgSrc}
                      alt={director.name}
                      width={340}
                      height={300}
                      className={styles.photo}
                    />
                  )}
                </div>
                <div className={styles.cardInfo}>
                  <h3>{director.name}</h3>
                  <p className={styles.role}>{role}</p>
                  {email && (
                    <a href={`mailto:${email}`} className={styles.emailLink}>
                      <FaEnvelope size={12} />
                      <span>{email}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.staffBanner}>
          <div className={styles.staffContent}>
            <span className={styles.staffTag}>The Heart of HEB</span>
            <h3>Our Haitian Staff</h3>
            <ReactMarkdown>{aboutUs.haitianStaff.description}</ReactMarkdown>
          </div>
          <div className={styles.staffImageWrapper}>
            <Image
              src={staffImg}
              alt="Haitian staff at Hospital Evangelique Bombardopolis"
              width={600}
              height={400}
              className={styles.staffImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;
