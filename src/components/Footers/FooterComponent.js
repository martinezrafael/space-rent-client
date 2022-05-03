import styled from "styled-components";
import MediumTextRedComponent from "../Text/MediumTextRedComponent";
import InputNewsletterComponent from '../Inputs/InputNewsLetterComponent';
import BtnBlueComponent from "../Buttons/BtnBlueComponent";
import NavBarFooter from '../Navbars/NavbarFooterComponent'

const Footer = styled.footer`
  background-color: #414141;
  padding: 20px;
`;

const FooterContainer = styled.div`
  max-width: 80%;
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
`;

const NewsletterContainer = styled.div`
  max-width: 400px;
  padding: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavContainer = styled.div`
    max-width: 400px;
`

//Text's
const TextNewsletter = "Cadastre-se e receba nossas novidades";

const FooterComponent = () => {
    return (
        <Footer>
            <FooterContainer>
                <NewsletterContainer>
                    <MediumTextRedComponent content={TextNewsletter} />
                    <InputContainer>
                        <InputNewsletterComponent placeholder="example@example.com.br" />
                        <BtnBlueComponent value="Cadastrar" />
                    </InputContainer>
                </NewsletterContainer>
                <NavContainer>
                   <NavBarFooter />
                </NavContainer>
            </FooterContainer>
        </Footer>
    );
};

export default FooterComponent;
