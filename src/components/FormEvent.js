import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiUtils from "../utils/api.utils";

const FormEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();

    const handleNewEvent = async () => {
        try {
            await apiUtils.createEvent(title, description, price);
            setTitle('');
            setDescription('');
            setPrice('');
            navigate('/private/events')
        } catch (error) {
            navigate("/login");
            console.log(error);
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="title">Nome do Evento</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                <label htmlFor="price">Preço</label>
                <input
                    id="price"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <button onClick={handleNewEvent}>Cadastrar</button>
        </div>
    )

}

export default FormEvent;