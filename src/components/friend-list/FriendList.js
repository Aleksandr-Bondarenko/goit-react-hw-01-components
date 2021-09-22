import PropTypes from 'prop-types';
import FriendItem from './FriendItem';

export default function FriendList({ friends }) {
  console.log(friends);
  return (
    <ul className="friend-list">
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
  friends: PropTypes.array,
};
