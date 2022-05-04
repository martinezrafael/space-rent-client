import React, { useState } from "react";
import styled from "styled-components";
import BtnRedComponent from "../Buttons/BtnRedComponent";
import InputPasswordComponent from "../Inputs/InputPasswordComponent";
import InputTextComponent from "../Inputs/InputTextComponent";
import LabelComponent from "./LabelComponent";
import { useNavigate } from "react-router-dom";
import apiUtils from "../../utils/api.utils";

const Form = styled.form`
  max-width: 300px;
`;

const FormContainer = styled.div``;

const FormLoginComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    const resetForm = () => {
        setUsername('');
        setPassword('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiUtils.login({username, password});
            resetForm();
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Nome de usuário</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Senha</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Entrar</button>
        </form>
    );
};

export default FormLoginComponent;
