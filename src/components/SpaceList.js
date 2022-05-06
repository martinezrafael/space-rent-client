import SpaceItem from "./SpaceItem";

const SpaceList = ({spaces, getAllSpaces}) => {
    return (
        <div>
            {spaces.map(space => <SpaceItem key={space._id} {...space} getAllSpaces={getAllSpaces} />)}
        </div>
    )
}

export default SpaceList;