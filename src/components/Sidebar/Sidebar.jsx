import React from 'react';
import styles from './Sidebar.module.scss';
import cover from '../../assets/images/cover-image.jpg';
import avatar from '../../assets/images/profile-image.png';
import downArrow from '../../assets/icons/drop-down-arrow.png';

export default function Sidebar() {
  return (
      <aside >
        <div className={styles.sidebar}>
          <div className={styles.profileCard}>
            <div className={styles.profileCover}>
              <img src={cover} alt="Cover" />
            </div>
            <div className={styles.profileInfo}>
              <div className={`${styles.avatar} ${styles.large}`}>
                <img src={avatar} alt="Avatar" />
              </div>
              <div className={styles.userDetails}>
                <p className={styles.userName}>Albert Flores</p>
                <p className={styles.userInfo}>Senior Product Designer | UI/UX Designer | Graphic Designer | Web...</p>
                <p className={styles.userLocation}>Clinton, Maryland</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sidebar}>
          <ul className={styles.stats}>
            <li>Profile Visitors <span>140</span></li>
            <hr className={styles.customHr} />
            <li>Resume Viewers <span>200</span></li>
            <hr className={styles.customHr} />
            <li>My Jobs <span>88</span></li>
          </ul>
        </div>
       
        <div className={styles.sidebar}>
          <div className={styles.calendarWrapper}>
            <div className={styles.calendarInfo}>
                <strong>My calendar</strong>
                <p>Upcoming Interviews</p>
            </div>
            <div className={styles.calendarDropdown}>
                <img src={downArrow} alt=""/>
            </div>
        </div>
        </div>
      </aside >
  );
}
