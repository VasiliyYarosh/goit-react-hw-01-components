import PropTypes from 'prop-types';
import s from './profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.profile}>
        <div className={s.description}>
          <img
            src={avatar}
            width="200"
            height="200"
            alt="User avatar"
            className={s.avatar}
          />
          <h1 className={s.name}>{username}</h1>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
          <li className={s.item}>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}> {stats.followers}</span>
          </li>
          <li className={s.item}>
            <span className={s.label}>Views</span>
            <span className={s.quantity}> {stats.views}</span>
          </li>
          <li className={s.item}>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}> {stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};