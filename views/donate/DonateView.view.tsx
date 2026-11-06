import { useState } from 'react';
import styles from './DonateView.module.scss';
import donateInfo from '../../cms/data/content/donate.json';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import {
  FaBolt,
  FaCheck,
  FaCopy,
  FaEnvelopeOpenText,
  FaExternalLinkAlt,
  FaHandHoldingHeart,
  FaPaypal,
  FaRegCreditCard,
  FaShieldAlt,
} from 'react-icons/fa';

const getOptionMeta = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes('donorbox')) {
    return {
      icon: FaRegCreditCard,
      badge: 'Recommended • Online',
      featured: true,
    };
  }
  if (lower.includes('zelle')) {
    return {
      icon: FaBolt,
      badge: '100% Fee-Free',
      featured: false,
    };
  }
  if (lower.includes('check')) {
    return {
      icon: FaEnvelopeOpenText,
      badge: 'Mail-In Gift',
      featured: false,
    };
  }
  if (lower.includes('paypal')) {
    return {
      icon: FaPaypal,
      badge: 'PayPal Checkout',
      featured: false,
    };
  }
  return {
    icon: FaHandHoldingHeart,
    badge: 'Way to Give',
    featured: false,
  };
};

const extractEmail = (text: string): string | null => {
  const match = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  return match ? match[0] : null;
};

const DonateView = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      window.setTimeout(() => setCopiedEmail(null), 2400);
    } catch {
      // Fallback if clipboard API is unavailable
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.waysToGive}>
        <div className={styles.headerBlock}>
          <span className={styles.eyebrow}>Partner With Us</span>
          <h2 className={styles.title}>{donateInfo.header}</h2>
          <p className={styles.subTitle}>{donateInfo.description}</p>

          <div className={styles.trustRow}>
            <span className={styles.trustItem}>
              <FaShieldAlt /> Secure &amp; Trusted Giving
            </span>
            <span className={styles.trustDot} aria-hidden="true" />
            <span className={styles.trustItem}>
              <FaHandHoldingHeart /> Directly Supports Northwest Haiti
            </span>
          </div>
        </div>

        <div className={styles.givingOptions}>
          {donateInfo.givingOptions.map((option, index) => {
            const meta = getOptionMeta(option.title);
            const IconComponent = meta.icon;
            const detectedEmail = extractEmail(option.description || '');
            const imageSrc = option.image
              ? option.image.startsWith('/')
                ? option.image
                : `/${option.image}`
              : null;

            return (
              <div
                className={`${styles.givingCard} ${
                  meta.featured ? styles.featured : ''
                }`}
                key={option.title + index}
              >
                <div className={styles.cardBody}>
                  <div className={styles.cardTopRow}>
                    <div className={styles.iconCircle}>
                      <IconComponent />
                    </div>
                    <span
                      className={`${styles.badge} ${
                        meta.featured ? styles.featuredBadge : ''
                      }`}
                    >
                      {meta.badge}
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>{option.title}</h3>

                  <div className={styles.contentSplit}>
                    <div className={styles.markdown}>
                      <ReactMarkdown>{option.description}</ReactMarkdown>
                    </div>

                    {imageSrc && (
                      <div className={styles.qrCard}>
                        <Image
                          src={imageSrc}
                          alt={`${option.title} QR code`}
                          className={styles.qrImage}
                          width={128}
                          height={128}
                        />
                        <span className={styles.qrCaption}>Scan to Give</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  {detectedEmail && (
                    <button
                      type="button"
                      className={styles.copyButton}
                      onClick={() => handleCopyEmail(detectedEmail)}
                    >
                      {copiedEmail === detectedEmail ? (
                        <>
                          <FaCheck /> Copied {detectedEmail}
                        </>
                      ) : (
                        <>
                          <FaCopy /> Copy {detectedEmail}
                        </>
                      )}
                    </button>
                  )}

                  {option.link && (
                    <a
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.ctaLink} ${
                        meta.featured ? styles.primaryCta : styles.secondaryCta
                      }`}
                    >
                      <span>{option.linkTitle || 'Donate Now'}</span>
                      <FaExternalLinkAlt size={13} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DonateView;
