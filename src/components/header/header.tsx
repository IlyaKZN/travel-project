import { FC } from "react";
import { IHeaderProps } from "../../interfaces/components";
import { HeaderContainer, HeaderTitle } from "./header.styles";

const Header: FC<IHeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      {title ? <HeaderTitle>{title}</HeaderTitle> : null}
    </HeaderContainer>
  );
};

export default Header;
