import styled from "styled-components";
import FooterComponent from "../components/Footers/FooterComponent";
import FormSignupComponent from "../components/Form/FormSignupComponent";
import HeaderComponent from "../components/Headers/HeaderComponent";
import BigTextRedComponent from "../components/Text/BigTextRedComponent";
import MediumTextWhiteComponent from "../components/Text/MediumTextWhiteComponent";

const TextContainer = styled.div`
  padding: 48px 0;
  max-width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TextPrimary = "Conheça a Space Rent";
const TextSecondary =
    "Rentabilize seu espaço, alugando para eventos de todos os tipos";

const Home = () => {
    return (
        <>
            <HeaderComponent />
            <TextContainer>
                <BigTextRedComponent content={TextPrimary} />
                <MediumTextWhiteComponent content={TextSecondary} />
            </TextContainer>
            <FormSignupComponent />
            <FooterComponent />
        </>
    );
};

export default Home;
