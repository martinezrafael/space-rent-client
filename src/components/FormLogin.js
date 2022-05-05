import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiUtils from "../utils/api.utils";

const FormLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const resetForm = () => {
        setUsername('');
        setPassword('');
    }

    const handleSubmit =  async (e) => {
        e.preventDefault();
        try {
            await apiUtils.login({username, password})
            resetForm();
            navigate('/private/profile')
        } catch (error) {
            console.log(error);
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
            </div>
            <div>
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

export default FormLogin;
