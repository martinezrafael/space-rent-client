import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiUtils from "../utils/api.utils";
import styled from 'styled-components';

const FormSpaceComponent = styled.div`
    max-width: 80%;
`

const ContainerInput = styled.div`
    max-width: 80%;
    margin: auto;
    margin-bottom: 10px;
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



const Label = styled.label`
    color: #F9F9FA;
`
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
        <FormSpaceComponent>
            <ContainerInput>
                <Label htmlFor="name">Nome do Espaço</Label>
                <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                <Label htmlFor="size">Tamanho</Label>
                <Input
                    id="size"
                    type="text"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
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
                <Button onClick={handleNewSpace}>Cadastrar</Button>
            </ContainerInput>
        </FormSpaceComponent>
    );
};

export default FormSpace;
