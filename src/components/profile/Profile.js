import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Img,
  UserName,
  Tag,
  Location,
  List,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Card className="profile">
      <Description className="description">
        <Img src={avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <List className="stats">
        <Item>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{followers}</Quantity>
        </Item>
        <Item>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{views}</Quantity>
        </Item>
        <Item>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{likes}</Quantity>
        </Item>
      </List>
    </Card>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};