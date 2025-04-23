import React from 'react';
import styles from './DonateView.module.scss';
import donate from '../../pages/donate';

const DonateView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.waysToGive}>
        <h1>Give in the Way That Works Best for You</h1>
        <p>
          Thank you for your generosity! We offer several options to make giving
          easy and meaningful. Choose the one that fits your preference.
        </p>

        <div className={styles.givingOptions}>
          <div className={styles.givingCard}>
            <h2>Donorbox (Online Giving)</h2>
            <ul>
              <li>Credit or Debit Card</li>
              <li>Apple Pay, Amazon Pay, Cash App</li>
              <li>Direct Bank Transfer</li>
            </ul>
            <p className={styles.note}>
              You can choose to cover the processing fee if you&apos;d like.
            </p>
            <a
              href="https://donorbox.org/your-campaign"
              target="_blank"
              rel="noopener noreferrer"
            >
              Give via Donorbox
            </a>
          </div>

          <div className={`${styles.givingCard} ${styles.preferred}`}>
            <h2>Zelle (No Fees!)</h2>
            <p>Send donations directly from your bank—fast and fee-free.</p>
            <ul>
              <li>Setup recurring transfers on your own schedule</li>
              <li>No middleman, no processing fees</li>
            </ul>
            <p>
              <strong>Zelle to:</strong> give@yourdomain.org
            </p>
            <p>
              <em>Please note in memo: “Donation”</em>
            </p>
          </div>

          <div className={styles.givingCard}>
            <h2>By Check</h2>
            <p>Mail your gift to:</p>
            <address>
              International Mission Foundation
              <br />
              123 Kingdom Way
              <br />
              City, State ZIP
            </address>
            <p>
              Make checks payable to:{' '}
              <strong>International Mission Foundation</strong>
            </p>
          </div>

          <div className={styles.givingCard}>
            <h2>PayPal</h2>
            <p>Donate via credit card or linked bank account.</p>
            <p className={styles.note}>
              Note: PayPal deducts a small processing fee from your donation.
            </p>
            <a
              href="https://paypal.me/yourlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate via PayPal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateView;
