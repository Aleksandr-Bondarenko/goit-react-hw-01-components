import PropTypes from 'prop-types';
import defaultAvatar from './defaultImg.png';
import s from './Profile.module.css';

export default function Profile({
  name = 'NONAME',
  tag,
  location,
  stats,
  avatar = defaultAvatar,
}) {
  return (
    <div className={s.box}>
      <div className={s.userBox}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={s.userAvatar}
          width="120"
        />
        <p className={s.userName}>{name}</p>
        <p className={s.userTag}>@{tag}</p>
        <p className={s.userLocation}>{location}</p>
      </div>
      <ul className={s.statsBox}>
        <li>
          <span className={s.statsName}>Followers</span>
          <span className={s.statsValue}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.statsName}>Views</span>
          <span className={s.statsValue}>{stats.views}</span>
        </li>
        <li>
          <span className={s.statsName}>Likes</span>
          <span className={s.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  avatar: PropTypes.string.isRequired,
};
