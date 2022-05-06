import { Link } from "react-router-dom";
import styled from 'styled-components';

const Event = styled.div`
    background-color: #F9F9FA;
    width: 200px;
    height: 200px;
    padding: 10px;
`

const EventItem = ({_id, title, description, price}) => {
    return (
        <Link to={`/events/${_id}`}>
            <Event>
            <h3>{title}</h3>
            <p>{description}</p>
            <span>{`R$${price}`}</span>
            </Event>
        </Link>
    )
}


export default EventItem;