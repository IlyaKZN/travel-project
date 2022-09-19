import styled from "styled-components";
import { TAvatarImageProps } from "../../types/style.types";

const AvatarImage = styled.img<TAvatarImageProps>`
  height: ${({ height }) => height}px;
  border: ${({ theme, border }) => border ? `5px solid ${theme.colors.primary}` : null};
  border-radius: 100%;
`;

export { AvatarImage };