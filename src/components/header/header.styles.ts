import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  min-height: 48px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 28px;
`;

export { HeaderContainer };