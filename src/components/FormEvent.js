import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiUtils from "../utils/api.utils";
import styled from 'styled-components';

const FormEventComponent = styled.div`
    max-width: 80%;
`

const ContainerInput = styled.div`
    max-width: 80%;
    margin: auto;
    margin-bottom: 10px;
`

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
        <FormEventComponent>
            <ContainerInput>
                <Label htmlFor="title">Nome do Evento</Label>
                <Input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </ContainerInput>
            <ContainerInput>
                <Label htmlFor="description">Descrição</Label>
                <TextArea
                    id="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></TextArea>
            </ContainerInput>
            <ContainerInput>
                <Label htmlFor="price">Preço</Label>
                <Input
                    id="price"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </ContainerInput>
            <ContainerInput>
                <Button onClick={handleNewEvent}>Cadastrar</Button>
            </ContainerInput>
        </FormEventComponent>
    )

}

export default FormEvent;