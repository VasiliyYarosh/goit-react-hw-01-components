import s from './FriendList.module.scss';
import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => {
  return (
    <div className={s.wrapper}>
      {friends.map(friends => (
        <ul className={s.list}>
          <li className={s.item}>
            {friends.isOnline ? (
              <span className={s.isOnline}></span>
            ) : (
              <span className={s.ofline}></span>
            )}
            <img
              className={s.avatar}
              src={friends.avatar}
              alt="аватар"
              width="70"
            />
            <p className={s.name}>{friends.name}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default FriendsList;

FriendsList.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};