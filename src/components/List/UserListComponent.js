import styled from 'styled-components';
import CardUser from '../Cards/CardUserComponent';


const UserListcomponent = ({ users }) => {
    return(
        <div>
            {users.map(user => <CardUser key={user._id} { ...user } />)}
        </div>
    );
}

export default UserListcomponent;