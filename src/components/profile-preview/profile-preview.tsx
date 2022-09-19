import { FC } from 'react';
import { ProfilePreviewContainer } from './profile-preview-styles';
import Avatar from '../avatar/avatar';

const ProfilePreview: FC = () => {
  return (
    <ProfilePreviewContainer>
      <Avatar height={175} border={true} />
    </ProfilePreviewContainer>
  )
};

export default ProfilePreview;