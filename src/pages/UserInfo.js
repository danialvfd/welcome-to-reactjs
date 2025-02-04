import React from 'react';

const UserInfo = ({ name, family, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Last Name: {family}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserInfo;
