import React, { useState, useEffect } from 'react';

function UserData() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        
        xhr.onload = function() {
            if (xhr.status === 200) {
                setUser(JSON.parse(xhr.responseText));
            }
        };
        
        xhr.open('GET', 'https://api.restful-api.dev/objects/7', true);
        xhr.send();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>price: {user.data.price}</p>
            <p>year: {user.data.year}</p>
            <p>CPU Model: {user.data['CPU model']}</p>
        </div>
    );
}

export default UserData;
