import Footer from "../components/Footer";
import FormLogin from "../components/FormLogin";
import Header from "../components/Header";
import styled from 'styled-components';
import BigTextRed from "../components/BigTextRed";
import MediumTextWhite from "../components/MediumTextWhite";

const SubHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    margin: auto;
    padding: 32px 0;
    tex-align: center;
`

const TextPrimary = 'Seja bem vindo'
const TextSecondary = 'Não perca mais tempo, conecte-se agora mesmo na sua conta e cadastre seus espaços para começar a lucrar!'

const Login  = () => {
    return(
        <div>
            <Header />
            <SubHeader>
                <BigTextRed value={TextPrimary}/>
                <MediumTextWhite value={TextSecondary}/>
            </SubHeader>
            <FormLogin />
            <Footer />
        </div>
    )
}

export default Login;