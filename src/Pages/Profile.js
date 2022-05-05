import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
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

    return (
        <div>
            <h2>Profile</h2>
            <UserProfile {...user}/>
        </div>
    )
}

export default Profile;