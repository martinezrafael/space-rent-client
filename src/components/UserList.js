import UserItem from "./UserItem";

const UserList = ({users, getAllUsers}) => {
    return (
        <div>
            {users.map(user => <UserItem key={user._id} {...user} getAllUsers={getAllUsers}/>)}
        </div>
    )
}


export default UserList;