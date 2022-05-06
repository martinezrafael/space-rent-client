import { useState } from "react";
import apiUtils from "../utils/api.utils";

const UserProfile = ({ _id, username, biography, image }) => {
    const [file, setFile] = useState();
    const [imageUrl, setImageUrl] = useState("");

    const handleChangeImg = (e) => {
        const file = e.target.files[0];
        setFile(file);
        if(file){
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
    }

    return (
        <>
            <div>
                <label htmlFor="change-pic">Trocar Imagem</label>
                <input
                    id="change-pic"
                    type="file"
                    onChange={handleChangeImg}
                />
                {imageUrl ? (
                    <>
                    <img src={imageUrl} alt='new profile' width='200'/>
                    <button onClick={handleUpdateImg}>Adicionar nova imagem</button>
                    </>
                ) : null}
            </div>
            <div>
                <img width="200" src={image} alt={username} />
            </div>
            <h3>{username}</h3>
            <p>{biography}</p>
        </>
    );
};

export default UserProfile;
