import PropTypes from 'prop-types';
import s from '../Profile/Profile.module.css';
import noAvatar from '../../image/noavatar.png';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.container}>
      <div className={s.inner}>
        <img className={s.img} src={avatar} alt="Аватар пользователя" width="150" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.items}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  avatar: noAvatar,
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
