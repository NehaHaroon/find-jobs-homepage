import React from 'react';
import styles from './Navbar.module.scss';
import logo from '../../assets/images/find-jobs-logo.png';
import avatar from '../../assets/images/profile-icon-image.jpg';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>

      <nav>
        <a className={styles.active} href="#">Find Jobs</a>
        <a href="#">Top Companies</a>
        <a href="#">Job Tracker</a>
        <a href="#">My Calendar</a>
        <a href="#">Documents</a>
        <a href="#">Messages</a>
        <a href="#">Notifications</a>
      </nav>

      <div className={styles.navRight}>
        <div className={styles.searchBoxWrapper}>
          <div className={styles.searchBoxIcon}>
            <img src="/icons/search.svg" alt="Search" />
          </div>
          <input type="text" placeholder="Search..." />
        </div>
        <button className={styles.resumeBtn}>Resume Builder</button>
        <div className={styles.Avatar}>
          <img src={avatar} alt="">
        </div>
      </div>
    </header>
  );
}
