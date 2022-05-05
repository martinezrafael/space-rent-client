import React from "react";

const UserProfile = ({_id, username, biography, image}) => {
    return (
        <>
            <div>
                <img width='200px' src={image} alt={username} />
            </div>
            <div>{username}</div>
            <div>{biography}</div>
        </>
    );
};

export default UserProfile;
