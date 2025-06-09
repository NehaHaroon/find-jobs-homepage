import React from 'react';
import styles from './MainContent.module.scss';
import searchIcon from '../../assets/icons/search-icon-white.png'
import teamsLogo from '../../assets/images/teams-logo.png'
import locationIcon from '../../assets/icons/location-icon.png'
import clockIcon from '../../assets/icons/clock-icon.png'
import bookmarkIcon from '../../assets/icons/bookmark-icon.png'

export default function MainContent() {
  return (
    <main className={styles.mainContent}>
      <section className={styles.searchSection}>
        <h2>
          Find your Dream Job, <span>Albert!</span>
        </h2>
        <p>Explore the latest job openings and apply for the best opportunities available today!</p>

        <div className={styles.searchBar}>
          <input type="text" placeholder="Job Title, Company or Keywords" />
          <div className={styles.verticalLine}></div>
          <select>
            <option>Location</option>
            <option>Remote</option>
            <option>On-site</option>
          </select>
          <div className={styles.verticalLine}></div>
          <select>
            <option>Job Type</option>
            <option>Contract</option>
            <option>Part-time</option>
            <option>Full-time</option>
          </select>
          <button>
            <img src={searchIcon} alt=""/>
              Search
            </button>
        </div>
      </section>

      <div className={styles.tags}>
        <p>Similar:</p>
        <span>Frontend</span>
        <span>Backend</span>
        <span>Graphic Designer</span>
      </div>

      <section className={styles.jobSection}>
        <div className={styles.sectionHeader}>
          <h3>Featured Jobs</h3>
          <a href="/jobs">See Featured Jobs</a>
        </div>

        <div className={styles.jobGrid}>
          {[1, 2, 3, 4, 5].map((job) => (
            <div className={styles.jobCard} key={job}>
              <p class={styles.promoted}>Promoted</p>
              <div className={styles.jobDetails}> 
                <img src={teamsLogo} alt="Company" />
                <div>
                  <h4>UI/UX Designer</h4>
                   <p>Teams</p>
                </div>
              </div>
              <div className={styles.jobLocation}>
                <img src={locationIcon} alt="Location" />
                Seattle, USA (Remote)
              </div>
              <div className={styles.jobPostTime}>
                <img src={clockIcon} alt="Location" />
                2 days ago  | <a href="#">22 applicants</a>
              </div>
              <div className={styles.jobActions}>
                <button>Apply Now</button>
                <img className={styles.bookmarkIcon} src={bookmarkIcon} alt="Location" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.jobSection}>
        <div className={styles.sectionHeader}>
          <h3>Recommended Jobs</h3>
          <a href="/jobs">See Recommended Jobs</a>
        </div>

        <div className={styles.jobGrid}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((job) => (
            <div className={styles.jobCard} key={job}>
              <p class={styles.promoted}>Promoted</p>
              <div className={styles.jobDetails}> 
                <img src={teamsLogo} alt="Company" />
                <div>
                  <h4>UI/UX Designer</h4>
                   <p>Teams</p>
                </div>
              </div>
              <div className={styles.jobLocation}>
                <img src={locationIcon} alt="Location" />
                Seattle, USA (Remote)
              </div>
              <div className={styles.jobPostTime}>
                <img src={clockIcon} alt="Location" />
                2 days ago  | <a href="#">22 applicants</a>
              </div>
              <div className={styles.jobActions}>
                <button>Apply Now</button>
                <img className={styles.bookmarkIcon} src={bookmarkIcon} alt="Location" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.jobSection}>
        <div className={styles.sectionHeader}>
          <h3>Latest Jobs</h3>
          <a href="/jobs">See Latest Jobs</a>
        </div>

        <div className={styles.jobGrid}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((job) => (
            <div className={styles.jobCard} key={job}>
              <p class={styles.promoted}>Promoted</p>
              <div className={styles.jobDetails}> 
                <img src={teamsLogo} alt="Company" />
                <div>
                  <h4>UI/UX Designer</h4>
                   <p>Teams</p>
                </div>
              </div>
              <div className={styles.jobLocation}>
                <img src={locationIcon} alt="Location" />
                Seattle, USA (Remote)
              </div>
              <div className={styles.jobPostTime}>
                <img src={clockIcon} alt="Location" />
                2 days ago  | <a href="#">22 applicants</a>
              </div>
              <div className={styles.jobActions}>
                <button>Apply Now</button>
                <img className={styles.bookmarkIcon} src={bookmarkIcon} alt="Location" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
