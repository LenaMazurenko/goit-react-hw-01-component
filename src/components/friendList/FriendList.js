import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.FriendList}>
      {friends.map(friend => (
        <li key={friend.id} className={s.Item}>
          <span
            className={
              friend.isOnline
                ? `${s.Status} ${s.online}`
                : `${s.Status} ${s.offline}`
            }
          ></span>
          <img
            className={s.Avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.Name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ),
};
export default FriendList;
