import { useState } from "react";
import apiUtils from "../utils/api.utils";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerChangeImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  background-color: #f9f9fa;
  padding: 10px;
  margin: 10px 0;
`;

const Label = styled.label`
  color: #f9f9fa;
  display: block;
  margin-bottom: 5px;
`;

const CardUploadImage = styled.div`
  background-color: #e64e35;
  width: 300px;
  margin-bottom: 10px;
  padding: 20px;
`;

const Profile = styled.div`
  max-width: 80%;
`;

const LinkUsers = styled.span`
  color: #f9f9fa;
  background-color: #E64E35;
  padding: 5px;
  margin: 20px 0;
  display: inline-block;
`;

const ProfileInformations = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9fa;
  color: #1e56bc;
  padding: 10px;
  gap: 50px;
`;

const UserProfile = ({ _id, username, biography, image, spaces }) => {
    const [file, setFile] = useState();
    const [imageUrl, setImageUrl] = useState("");

    const handleChangeImg = (e) => {
        const file = e.target.files[0];
        setFile(file);
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageUrl(imageUrl);
        } else {
            setImageUrl(null);
        }
    };

    const handleUpdateImg = async () => {
        try {
            await apiUtils.updateImage(file);
            setFile(null);
            setImageUrl(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Profile>
            <CardUploadImage>
                <Label htmlFor="change-pic">Trocar/Adicionar Imagem</Label>
                <input id="change-pic" type="file" onChange={handleChangeImg} />
                {imageUrl ? (
                    <ContainerChangeImage>
                        <img src={imageUrl} alt="new profile" width="200" />
                        <button onClick={handleUpdateImg}>Adicionar nova imagem</button>
                    </ContainerChangeImage>
                ) : null}
            </CardUploadImage>
            <ProfileInformations>
                <img width="200" src={image} alt={username} />
                <div>
                    <h3>{`Nome: ${username}`}</h3>
                    <p>{`Biografia: ${biography}`}</p>
                </div>
            </ProfileInformations>
            <Link to="/private/users">
                <LinkUsers>Ver mais usuários</LinkUsers>
            </Link>
        </Profile>
    );
};

export default UserProfile;
