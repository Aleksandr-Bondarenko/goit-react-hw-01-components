import PropTypes from 'prop-types';
import FriendItem from '../friend-item/FriendItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, name, isOnline, avatar }) => {
        return (
          <FriendItem
            key={id}
            name={name}
            isOnline={isOnline}
            avatar={avatar}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
