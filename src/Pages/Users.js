import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserList from "../components/UserList";
import apiUtils from "../utils/api.utils";

const Users = () => {
    const [ users, setUsers ] = useState([]);

    const navigate = useNavigate();

    const getAllUsers = async () => {
        try {
            const users = await apiUtils.getUsers();
            setUsers(users)
        } catch (error) {
            console.error(error);
            navigate('/login');
        }
    }

    useEffect(() => {
        getAllUsers();
    }, [getAllUsers])

    return (
        <div>
            <input id="searchUser" />
            <UserList users={users} getAllUsers={getAllUsers}/>
            <h2>teste</h2>
        </div>
    )
}


export default Users;