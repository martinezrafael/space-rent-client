import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiUtils from "../utils/api.utils";
import styled from "styled-components";



const Signup = styled.div`
  max-width: 400px;
  box-sizing: border-box;
  padding: 20px;
`;

const Label = styled.label`
    color: #F9F9FA;
`

const Input = styled.input`
  width: 100%;
  height: 22px;
  margin: 4px 0;
  padding: 6px;
  border: none;
  background: #f9f9fa;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
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

const ToLogin = styled.p`
    color: #F9F9FA;
    width: 100%;
`

const FormSignup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [biography, setBiography] = useState("");

    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await apiUtils.signup(username, password, biography);
            setUsername("");
            setPassword("");
            setBiography("");
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        
            <Signup>
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
                <div>
                    <Label htmlFor="biography">Biografia</Label>
                    <TextArea
                        id="biography"
                        type="text"
                        value={biography}
                        onChange={(e) => setBiography(e.target.value)}
                    ></TextArea>
                </div>
                <Button onClick={handleSignup}>Cadastrar</Button>
                <ToLogin>Já tem uma conta?</ToLogin>
                <Link to='/login'>
                    <ToLogin>Login</ToLogin>
                </Link>
            </Signup>
      
    );
};

export default FormSignup;
