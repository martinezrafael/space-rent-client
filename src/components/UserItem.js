import { Link } from "react-router-dom";
import styled from "styled-components";

const UserItemComponent = styled.div`
  background-color: #f9f9fa;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  height: 400px;
  text-align: center;
  margin-bottom: 20px;
  overflow: hidden;
`;
const Image = styled.img`
  height: 50%;
`;

const Button = styled.button`
  background-color: #e64e35;
  border: none;
  color: #f9f9fa;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  height: 32px;
  text-transform: uppercase;
`;

const UserItem = ({ _id, username, biography, image, getAllUsers }) => {
    return (
        <UserItemComponent>
            <Image src={image} alt={username} />

            <h3>{username}</h3>
            <p>{biography}</p>

            <Link to={`/users/${_id}`}>
                <Button>Ver Perfil</Button>
            </Link>

        </UserItemComponent>
    );
};

export default UserItem;
