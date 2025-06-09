import React from 'react';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profileCard}>
        <div className={styles.profileCover}>
          <img src="/images/cover.jpg" alt="Cover" />
        </div>
        <div className={styles.profileInfo}>
          <div className={`${styles.avatar} ${styles.large}`}>
            <img src="/images/avatar.jpg" alt="Avatar" />
          </div>
          <div className={styles.userDetails}>
            <p className={styles.userName}>John Doe</p>
            <p className={styles.userInfo}>Software Engineer</p>
            <p className={styles.userLocation}>San Francisco, CA</p>
          </div>
        </div>
      </div>

      <ul className={styles.stats}>
        <li>
          Applications <span>42</span>
        </li>
        <li>
          Interviews <span>8</span>
        </li>
        <li>
          Offers <span>2</span>
        </li>
      </ul>
    </aside>
  );
}
