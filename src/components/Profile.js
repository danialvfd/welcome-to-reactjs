import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
}

export default Profile;
