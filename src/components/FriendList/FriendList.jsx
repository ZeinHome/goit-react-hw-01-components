import PropTypes from 'prop-types';
import {
  ContainerFriend,
  FriendItem,
  Status,
  FriendName,
} from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <ContainerFriend>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <Status
            style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
          ></Status>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <FriendName>{friend.name}</FriendName>
        </FriendItem>
      ))}
    </ContainerFriend>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
