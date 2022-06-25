import PropTypes from 'prop-types';
import {ContainerFriend, FriendItem, Status, FriendName  } from "./FriendList.styled";

function FriendList({friends}) {
    return(
<ContainerFriend>
{friends.map(p => <FriendItem key={p.id}>
    <Status style={{backgroundColor: p.isOnline ? 'green' : 'red'}}></Status>
  <img className="avatar" src={p.avatar} alt="User avatar" width="48" />
  <FriendName>{p.name}</FriendName>
</FriendItem>)}
</ContainerFriend>
    )
}

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })),
  };