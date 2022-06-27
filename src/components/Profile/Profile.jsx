import {
  ContainerProfile,
  Description,
  DescriptionName,
  DescriptionTag,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';
import PropTypes from 'prop-types';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ContainerProfile>
      <Description>
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
          width={50}
          height={50}
        />
        <DescriptionName>{username}</DescriptionName>
        <DescriptionTag>{'@' + tag}</DescriptionTag>
        <DescriptionTag>{location}</DescriptionTag>
      </Description>

      <Stats key={stats.followers}>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </ContainerProfile>
  );
}
export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
