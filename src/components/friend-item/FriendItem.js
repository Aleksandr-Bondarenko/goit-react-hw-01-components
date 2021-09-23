import PropTypes from 'prop-types';
import s from './FriendItem.module.css';

export default function FriendItem({ name, avatar, isOnline }) {
  const statusClass = isOnline ? s.onlineStatus : s.offlineStatus;
  return (
    <li className={s.item}>
      <span className={statusClass}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
