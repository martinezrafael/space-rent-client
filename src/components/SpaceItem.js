import { Link } from "react-router-dom";
import styled from 'styled-components';

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
        </Space>
    );
};


export default SpaceItem;