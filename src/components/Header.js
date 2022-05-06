import styled from "styled-components";

import Logo from "./Logo";



const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  max-width: 80%;
  margin: auto;
`;



const Header = () => {
    return (
        <HeaderContainer>
            <HeaderComponent>
                <Logo />
            </HeaderComponent>
        </HeaderContainer>
    );
};

export default Header;
