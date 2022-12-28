import PropTypes from 'prop-types';

import { Item, Status, Img, UserName } from './FriendsList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Img src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};