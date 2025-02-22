import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../components/UserContext';
import UserInfo from './UserInfo';
import Profile from '../components/Profile';

const UserDetails = () => {
    const { user, setUser } = useContext(UserContext);
    const [userData, setUserData] = useState();
    const [showUserInfo, setShowUserInfo] = useState(false);

    useEffect(() => {
        setUser({ name: 'ali' });
    }, [setUser]);

    const handleClick = () => {
        setUser({ name: 'mohammad' });
        setUserData({ name: 'ali', family: 'kazemi', age: 30 });
        setShowUserInfo(true);
    };

    return (
        <div>
            <button onClick={handleClick}>دریافت اطلاعات</button>
            <div>
                <h3>UserName: {user?.name}</h3>
            </div>
            {showUserInfo && <UserInfo name={userData?.name} family={userData?.family} age={userData?.age} />}
            <Profile />
        </div>
    );
};

export default UserDetails;
