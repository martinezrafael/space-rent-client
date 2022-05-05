import { useState } from "react";
import apiUtils from "../utils/api.utils";
import { Link } from "react-router-dom";

const UserItem = ({_id, username, biography, image, getAllUsers}) => {
    return (
        <Link to='/users'>
            <div>
                <img width='200' src={image} alt={username} />
                <h3>{username}</h3>
                <p>{biography}</p>
            </div>
        </Link>
    )
}

export default UserItem;