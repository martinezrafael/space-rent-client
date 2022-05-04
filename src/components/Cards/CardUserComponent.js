import styled from 'styled-components';

const CardUser = styled.div`
    background-color: #F9F9FA;
    color: #414141;
    height: 200px;
    width: 200px;
`

const CardUserComponent = ({ _id, username, biography }) => {
    return (
        <CardUser>
            <h3>{username}</h3>
            <p>{biography}</p>
        </CardUser>
    )
}

export default CardUserComponent;