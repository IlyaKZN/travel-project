import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  min-height: 48px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.p`
  color: white;
  font-family: ${({ theme }) => theme.textRegular13.family};
  font-size: ${({ theme }) => theme.textRegular13.size}px;
  line-height: ${({ theme }) => theme.textRegular13.lineHeight}px;
  font-weight: ${({ theme }) => theme.textRegular13.weight};
`;

export { HeaderContainer, HeaderTitle };