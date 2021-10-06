import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from '../FriendList/FriendList.module.css';
function FriendList({ friends }) {
  return (
    <ul className={s.items}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
