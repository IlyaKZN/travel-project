import styled from "styled-components";

const NavigationContainer = styled.nav`
  width: 100%;
  min-height: 64px;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: 39px 39px 0 0;
  position: fixed;
  left: 0;
  bottom: 0;

  @media screen and (max-height: 700px) {
    display: none;
  }
`;

export { NavigationContainer };