import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiUtils from "../utils/api.utils";

const FormSpace = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [size, setSize] = useState("");
    const [purposes, setPurposes] = useState([]);
    const [price, setPrice] = useState("");

    const navigate = useNavigate();

    const handleNewSpace = async () => {
        try {
            await apiUtils.createSpace(name, description, size, purposes, price);
            setName("");
            setDescription("");
            setSize("");
            setPurposes("");
            setPrice("");
            navigate("/private/spaces");
        } catch (error) {
            navigate("/login");
            console.log(error);
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="name">Nome do Espaço</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Descrição</label>
                <textarea
                    id="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div>
                <label htmlFor="size">Tamanho</label>
                <input
                    id="size"
                    type="text"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="price">Preço</label>
                <input
                    id="price"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <button onClick={handleNewSpace}>Cadastrar</button>
        </div>
    );
};

export default FormSpace;
