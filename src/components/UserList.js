import UserItem from "./UserItem";
import styled from "styled-components";
import BigTextWhite from "./BigTextWhite";

const UserListComponent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: auto;
  padding: 20px;
`;

const ContainerText = styled.div`
    max-width: 80%;
    margin: auto;
    text-align: center;

`

const ContainerUsers = styled.div`
    padding: 20px;
`

const UserList = ({ users, getAllUsers }) => {
    return (
        <ContainerUsers>
            <ContainerText>
                <BigTextWhite value='Veja outros usuários'/>
            </ContainerText>
            <UserListComponent>
                {users.map((user) => (
                    <UserItem key={user._id} {...user} getAllUsers={getAllUsers} />
                ))}
            </UserListComponent>
        </ContainerUsers>
    );
};

export default UserList;
