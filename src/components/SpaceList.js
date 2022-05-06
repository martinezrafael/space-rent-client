import SpaceItem from "./SpaceItem";
import styled from 'styled-components';

const List = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    max-width: 90%;
    margin: auto;
    gap: 10px;
`

const SpaceList = ({spaces, getAllSpaces}) => {
    return (
        <List>
            {spaces.map(space => <SpaceItem key={space._id} {...space} getAllSpaces={getAllSpaces} />)}
        </List>
    )
}

export default SpaceList;