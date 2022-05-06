import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SpaceList from "../components/SpaceList";
import apiUtils from "../utils/api.utils";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";



const Spaces = () => {
    const [ spaces, setSpaces ] = useState([]);

    const navigate = useNavigate();

    const getAllSpaces = async () => {
        try {
            const spaces = await apiUtils.getSpaces();
            setSpaces(spaces)
        } catch (error) {
            console.error(error);
            navigate('/login');
        }
    }

    useEffect(() => {
        getAllSpaces();
    }, [])

    return (
        <div>
            <Header />
            <div>
                <SpaceList spaces={spaces} getAllSpaces={getAllSpaces}/>
            </div>
            <div>
                <Link to='/private/profile' style={{color:'#f9f9fa'}}>Voltar ao meu perfil</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Spaces;