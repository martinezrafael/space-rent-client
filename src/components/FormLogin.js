import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiUtils from "../utils/api.utils";
import styled from "styled-components";
import BigTextWhite from "./BigTextWhite";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  margin: auto;
  padding: 40px 0;
`;

const ContainerText = styled.div`
    max-width: 300px;
`

const Form = styled.form`
  max-width: 400px;
  padding: 20px;
`;

const Label = styled.label`
  color: #f9f9fa;
`;

const Input = styled.input`
  width: 100%;
  height: 22px;
  margin: 4px 0;
  padding: 6px;
  border: none;
  background: #f9f9fa;
`;

const Button = styled.button`
  background-color: #e64e35;
  border: none;
  color: #f9f9fa;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  height: 32px;
  text-transform: uppercase;
`;

const Text = 'Faça Login'

const FormLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const resetForm = () => {
        setUsername("");
        setPassword("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiUtils.login({ username, password });
            resetForm();
            navigate("/private/profile");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FormContainer>
            <ContainerText>
                <BigTextWhite value={Text}/>
            </ContainerText>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="username">Nome de usuário</Label>
                    <Input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="password">Senha</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button type="submit">Entrar</Button>
            </Form>
        </FormContainer>
    );
};

export default FormLogin;
