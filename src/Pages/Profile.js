import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import FormEvent from "../components/FormEvent";
import FormSpace from "../components/FormSpace";
import UserProfile from "../components/UserProfile";
import apiUtils from "../utils/api.utils";

const Profile = () => {
    const [ user, SetUser ] = useState({});

    const navigate = useNavigate();

    useEffect(()=>{
        const getProfile = async () => {
            try {
                const user = await apiUtils.getProfile();
                SetUser(user);
            } catch (error) {
                console.log(error);
                navigate('/login')
            }
        }
        getProfile();
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <div>
            <h2>Profile</h2>
            <UserProfile {...user}/>
            <h2>Cadastre um espaço</h2>
            <FormSpace />
            <h2>Cadastre um evento</h2>
            <FormEvent />
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Profile;