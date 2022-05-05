import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserList from "../components/UserList";
import apiUtils from "../utils/api.utils";

const Users = () => {
    const [ users, setusers ] = useState([]);

    const navigate = useNavigate();

    const getAllUsers = async () => {
        try {
            const users = await apiUtils.getUsers();
            setusers(users)
        } catch (error) {
            console.error(error);
            navigate('/login');
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div>
            <input id="searchUser" />
            <UserList users={users} getAllUsers={getAllUsers}/>
        </div>
    )
}


export default Users;