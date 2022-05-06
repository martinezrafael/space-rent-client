import UserItem from "./UserItem";
import styled from "styled-components";
import BigTextWhite from "./BigTextWhite";

const UserListComponent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 90%;
  margin: auto;
  padding: 20px;
`;

const ContainerText = styled.div`
    max-width: 80%;
    margin: auto;
    text-align: center;

`

const UserList = ({ users, getAllUsers }) => {
    return (
        <div>
            <ContainerText>
                <BigTextWhite value='Veja outros usuários'/>
            </ContainerText>
            <UserListComponent>
                {users.map((user) => (
                    <UserItem key={user._id} {...user} getAllUsers={getAllUsers} />
                ))}
            </UserListComponent>
        </div>
    );
};

export default UserList;
