import { useEffect, useState } from "react";
import styled from "styled-components";
import UserList from '../components/List/UserListComponent';
import apiUsers from "../utils/api.utils";

const Users = () => {
    const [users, setUsers] = useState([]);

    const getAllUsers = async () => {
        try {
            const users = await apiUsers.getUsers();
            setUsers(users);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllUsers();
    }, [])

   return(
       <>
        <UserList users={users}/>
       </>
   )
};


export default Users;