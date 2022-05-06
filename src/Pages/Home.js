import FormSignup from "../components/FormSignup";
import Header from "../components/Header";
import styled from 'styled-components';
import Footer from "../components/Footer";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 60%;
    margin: auto;
    padding: 20px;
`

const upper = (str) => {
    return str.toUpperCase();
}

const BigText = styled.h2`
    font-size: 42px;
    color: #F9F9FA;
    margin: 0;
    max-width: 500px;
`

const Text = 'Crie o seu usuário e cadastre seus espaços agora mesmo'

const Home = () => {
    return (
        <div>
        <Header />
        <Container>
            <BigText>{upper(Text)}</BigText>
            <FormSignup />
        </Container>
        <Footer />
        </div>
    )
}

export default Home;