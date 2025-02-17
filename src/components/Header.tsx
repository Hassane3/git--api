import React from "react";
import styled from "styled-components";
import { Logo } from "../assets/icons";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <i>
        <Logo />
      </i>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
  padding-bottom: 20px;
`;
export default Header;
