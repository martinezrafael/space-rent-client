import { Link } from "react-router-dom";
import styled from 'styled-components';
import apiUtils from "../utils/api.utils";

const Space = styled.div`
    background-color: #F9F9FA;
    border-radius: 4px;
    width: 200px;
    padding: 20px;
    margin-bottom: 10px;
`
const Name = styled.h3`
    color:#E64E35;
`

const DeleteBtn = styled.button`
    background-color: #E64E35;
    color: #F9F9FA;
    font-weigth: bold;
    text-transform: uppercase;
    border: none;
    margin-top: 10px;
    padding: 4px;
    cursor: pointer;
`

const upper = (str) => {
    return str.toUpperCase();
}


const SpaceItem = ({
    _id,
    name,
    description,
    size,
    purposes,
    price,
    getAllSpaces,
}) => {

    const deleteItem = async (id) => {
        try {
            await apiUtils.deleteSpace(id);
            await getAllSpaces();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Space>
            <Name>{upper(name)}</Name>
            <p>{description}</p>
            <span>{`${size}mt²`}</span>
            <ul>
                {purposes.map((purpose, index) => (
                    <li key={index}>{purpose}</li>
                ))}
            </ul>
            <p>{`R$${price}`}</p>
            <Link to={`/spaces/${_id}`}>Ver detalhes</Link>
            <DeleteBtn onClick={() => deleteItem(_id)}>Excluir Espaço</DeleteBtn>
        </Space>
    );
};


export default SpaceItem;