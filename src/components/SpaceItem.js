import { Link } from "react-router-dom";

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
        <Link to={`/spaces/${_id}`}>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>{`${size}mt²`}</span>
                <ul>
                    {purposes.map((purpose, index) => (
                        <li key={index}>{purpose}</li>
                    ))}
                </ul>
                <span>{`R$${price}`}</span>
            </div>
        </Link>
    );
};


export default SpaceItem;