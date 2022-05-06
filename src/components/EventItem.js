import { Link } from "react-router-dom";

const EventItem = ({_id, title, description, date, price}) => {
    return (
        <Link to={`/events/${_id}`}>
            <h3>{title}</h3>
            <p>{description}</p>
            <span>{`${date.getDay()}/${date.getMonth()}/${date.getYear()}`}</span>
            <span>{`R$${price}`}</span>
        </Link>
    )
}


export default EventItem;