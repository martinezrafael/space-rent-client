import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SpaceList from "../components/SpaceList";
import apiUtils from "../utils/api.utils";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Space = styled.div`
    background-color: #F9F9FA;
    color: #414141;
    width: 200px;
    padding: 20px;
`

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
            <Space>
                <SpaceList spaces={spaces} getAllSpaces={getAllSpaces}/>
            </Space>
            <div>
                <Link to='/private/profile'>Voltar ao meu perfil</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Spaces;