import React from 'react';

const UserInfo = ({ name, family, age }) => {
  return (
    <div>
      <p>نام: {name}</p>
      <p>نام خانوادگی: {family}</p>
      <p>سن: {age}</p>
    </div>
  );
};

export default UserInfo;
