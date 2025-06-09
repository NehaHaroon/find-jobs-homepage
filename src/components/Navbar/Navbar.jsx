import React, { useEffect, useRef } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../assets/images/find-jobs-logo.png';
import searchIcon from '../../assets/icons/search-icon.png';
import avatar from '../../assets/images/profile-icon-image.jpg';

export default function Navbar() {
  const navRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    const menuToggle = toggleBtnRef.current;
    const nav = navRef.current;

    const handleClick = () => {
      nav.classList.toggle(styles.open);
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
    };

    menuToggle.addEventListener('click', handleClick);

    return () => {
      menuToggle.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>

      <button
        className={styles.menuToggle}
        ref={toggleBtnRef}
        aria-label="Toggle navigation"
        aria-expanded="false"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect y="6" width="28" height="2.5" rx="1.25" fill="#2D6CDF" />
          <rect y="13" width="28" height="2.5" rx="1.25" fill="#2D6CDF" />
          <rect y="20" width="28" height="2.5" rx="1.25" fill="#2D6CDF" />
        </svg>
      </button>

      <nav ref={navRef} className={styles.navMenu}>
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
            <img src={searchIcon} alt="Search" />
          </div>
          <input type="text" placeholder="Search..." />
        </div>
        <button className={styles.resumeBtn}>Resume Builder</button>
        <div className={styles.avatar}>
          <img src={avatar} alt="User Avatar" />
        </div>
      </div>
    </header>
  );
}
