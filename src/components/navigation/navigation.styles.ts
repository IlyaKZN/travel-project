import styled from "styled-components";

const NavigationContainer = styled.nav`
  width: 100%;
  min-height: 64px;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: 39px;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export { NavigationContainer };