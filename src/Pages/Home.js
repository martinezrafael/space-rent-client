import FormSignup from "../components/FormSignup";
import Header from "../components/Header";
import styled from 'styled-components';
import Footer from "../components/Footer";
import BigTextWhite from "../components/BigTextWhite";
import BigTextRed from "../components/BigTextRed";
import MediumTextWhite from "../components/MediumTextWhite";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 60%;
    margin: auto;
    padding: 20px;
`
const ContainerText = styled.div`
    max-width: 400px;
`

const SubHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TextPrimary = 'Conheça a Space Rent';
const TextSecondary = 'Rentabilize seu espaço, alugando para eventos de todos os tipos'

const Text = 'Crie o seu usuário e cadastre seus espaços agora mesmo'

const Home = () => {
    return (
        <div>
        <Header />
        <SubHeader>
            <BigTextRed value={TextPrimary}/>
            <MediumTextWhite value={TextSecondary}/>
        </SubHeader>
        <Container>
            <ContainerText>
            <BigTextWhite value={Text}/>
            </ContainerText>
            <FormSignup />
        </Container>
        <Footer />
        </div>
    )
}

export default Home;