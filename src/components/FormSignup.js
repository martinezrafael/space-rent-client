import { useState } from "react";
import apiUtils from "../utils/api.utils";

const FormSignup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [biography, setBiography] = useState("");

    const handleSignup = async () => {
        try {
            await apiUtils.signup(username, password, biography);
            setUsername('');
            setPassword('')
            setBiography('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
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
            <label htmlFor="biography">Biografia</label>
            <textarea
                id="biography"
                type="text"
                value={biography}
                onChange={(e) => setBiography(e.target.value)}
            ></textarea>
            <button onClick={handleSignup}>Cadastrar</button>
        </div>
    );
};

export default FormSignup;
