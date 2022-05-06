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

const SubHeader = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const upper = (str) => {
    return str.toUpperCase();
}

const BigText = styled.h2`
    font-size: 42px;
    color: #E64E35;
    margin: 0;
`

const MediumText = styled.p`
    font-size: 22px;
    color: #F9F9FA;
`

const TextPrimary = 'Conheça a Space Rent';
const TextSecondary = 'Rentabilize seu espaço, alugando para eventos de todos os tipos'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderComponent>
                <Logo />
            </HeaderComponent>
            <SubHeader>
                <BigText>{upper(TextPrimary)}</BigText>
                <MediumText>{upper(TextSecondary)}</MediumText>
            </SubHeader>
        </HeaderContainer>
    );
};

export default Header;
