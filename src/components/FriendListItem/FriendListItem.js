import PropTypes from 'prop-types';
import s from '../FriendListItem/FriendListItem.module.css';
import noAvatar from '../../image/noavatar.png';

function Friends({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={s.label} style={{ backgroundColor: isOnline ? '#4caf50' : '#f44336' }}>
        {isOnline}
      </span>
      <img className={s.img} src={avatar} alt={name} width="48" />
      <p className={s.text}>{name}</p>
    </li>
  );
}

Friends.defaultProps = {
  avatar: noAvatar,
};

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default Friends;
