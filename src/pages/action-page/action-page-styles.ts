import styled from "styled-components";
import { TLogoProps } from "../../types/style.types";

const Logo = styled.img<TLogoProps>`
  margin-top: 61px;
  height: 132px;
  width: 110px;
  margin-bottom: ${({ marginbottom }) => marginbottom ? marginbottom : null}px;
`;

export { Logo };