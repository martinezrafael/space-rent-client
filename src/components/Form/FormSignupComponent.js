import styled from "styled-components";
import InputTextComponent from "../Inputs/InputTextComponent";
import InputPasswordComponent from "../Inputs/InputPasswordComponent";
import LabelComponent from "./LabelComponent";
import TextAreaComponent from "../Inputs/TextAreaComponent";
import BtnRedComponent from "../Buttons/BtnRedComponent";
import MediumTextWhiteComponent from "../Text/MediumTextWhiteComponent";

const FormSignup = styled.form`
  max-width: 400px;
  padding: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 70%;
  margin: auto;
`;

const Text = 'Crie o seu usuário e cadastre seus espaços agora mesmo';

const FormSignupComponent = () => {
    return (
        <FormContainer>
            <MediumTextWhiteComponent content={Text} />
            <FormSignup>
                <LabelComponent value="Nome de usuário" />
                <InputTextComponent placeholder="José da Silva" />
                <LabelComponent value="Senha" />
                <InputPasswordComponent placeholder="jose1234" />
                <LabelComponent value="Biografia" />
                <TextAreaComponent />
                <BtnRedComponent value="Criar usuário" />
            </FormSignup>
        </FormContainer>
    );
};

export default FormSignupComponent;
