import React from 'react';
import styles from './MainContent.module.scss';

export default function MainContent() {
  return (
    <main className={styles.mainContent}>
      <section className={styles.searchSection}>
        <h2>
          Welcome <span>Back</span>
        </h2>
        <p>Find your next opportunity</p>

        <div className={styles.searchBar}>
          <input type="text" placeholder="Job title or keyword" />
          <div className={styles.verticalLine}></div>
          <select>
            <option>Location</option>
            <option>Remote</option>
            <option>On-site</option>
          </select>
          <div className={styles.verticalLine}></div>
          <button>Search</button>
        </div>
      </section>

      <div className={styles.tags}>
        <p>Popular Tags:</p>
        <span>Frontend</span>
        <span>Remote</span>
        <span>React</span>
        <span>Design</span>
      </div>

      <section className={styles.jobSection}>
        <div className={styles.sectionHeader}>
          <h3>Featured Jobs</h3>
          <a href="/jobs">See all</a>
        </div>

        <div className={styles.jobGrid}>
          {[1, 2, 3].map((job) => (
            <div className={styles.jobCard} key={job}>
              <div className={styles.jobDetails}>
                <img src="/images/company-logo.png" alt="Company" />
                <div>
                  <h4>Senior Developer</h4>
                  <p>Company Name</p>
                </div>
              </div>
              <div className={styles.jobLocation}>
                📍 San Francisco
              </div>
              <div className={styles.jobPostTime}>
                ⏰ 2 days ago
              </div>
              <p className={styles.promoted}>Promoted</p>
              <div className={styles.jobActions}>
                <button>Apply</button>
                <div className={styles.bookmarkIcon}>🔖</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
