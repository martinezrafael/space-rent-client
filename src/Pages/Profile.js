import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import FormEvent from "../components/FormEvent";
import FormSpace from "../components/FormSpace";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import apiUtils from "../utils/api.utils";
import MediumTextWhite from "../components/MediumTextWhite";
import styled from "styled-components";
import Footer from "../components/Footer";

const ProfileContainer = styled.div`
  max-width: 80%;
  margin: auto;
`;

const BtnLogout = styled.button`
    background-color: #E64E35;
    color: #F9F9FA;
    cursor: pointer;
    text-transform: uppercase;
    border: none;
    margin: 10px 0;
    padding: 5px;
`

const Profile = () => {
    const [user, SetUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const getProfile = async () => {
            try {
                const user = await apiUtils.getProfile();
                SetUser(user);
            } catch (error) {
                console.log(error);
                navigate("/login");
            }
        };
        getProfile();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div>
            <Header />
            <ProfileContainer>
                <MediumTextWhite value="Meu perfil" />
                <UserProfile {...user} />
                <MediumTextWhite value='Cadastre um Espaço'/>
                <FormSpace />
                <MediumTextWhite value='Cadastre um Evento'/>
                <FormEvent />
                <BtnLogout onClick={handleLogout}>Logout</BtnLogout>
            </ProfileContainer>
            <Footer />
        </div>
    );
};

export default Profile;
