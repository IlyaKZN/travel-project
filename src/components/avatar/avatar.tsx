import { FC } from 'react';
import { IAvatarProps } from '../../interfaces/components';
import { AvatarImage } from './avatar-style';
import defaultAvatar from '../../assets/defaultAvatar.png';

const Avatar: FC<IAvatarProps> = ({ height, border, status }) => {
  return (
    <AvatarImage height={height} border={border} src={defaultAvatar} />
  )
};

export default Avatar;