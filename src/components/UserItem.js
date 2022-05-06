import { Link } from "react-router-dom";


const UserItem = ({_id, username, biography, image, getAllUsers}) => {
    return (
        <Link to={`/users/${_id}`}>
            <div>
                <img width="200px"  src={image} alt={username} />
                <h3>{username}</h3>
                <p>{biography}</p>
            </div>
        </Link>
    )
}

export default UserItem;