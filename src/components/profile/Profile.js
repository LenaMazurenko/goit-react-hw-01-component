import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={styles.Profile}>
      <div className={styles.Description}>
        <img src={avatar} alt={tag} className={styles.Avatar} />
        <p className={styles.Name}>{username}</p>
        <p className={styles.Tag}>{tag}</p>
        <p className={styles.Location}>{location}</p>
      </div>

      <ul className={styles.Stats}>
        <li>
          <span className={styles.Label}>Followers</span>
          <span className={styles.Quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.Label}>Views</span>
          <span className={styles.Quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.Label}>Likes</span>
          <span className={styles.Quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
export default Profile;
