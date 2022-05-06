import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserList from "../components/UserList";
import apiUtils from "../utils/api.utils";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UsersContainer = styled.div`
  max-width: 80%;
  margin: auto;
  display: flex;
`;

const Users = () => {
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    const getAllUsers = async () => {
        try {
            const users = await apiUtils.getUsers();
            setUsers(users);
        } catch (error) {
            console.error(error);
            navigate("/login");
        }
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div>
            <Header />
            <UsersContainer>
                <UserList users={users} getAllUsers={getAllUsers} />
            </UsersContainer>
            <Footer />
        </div>
    );
};

export default Users;
