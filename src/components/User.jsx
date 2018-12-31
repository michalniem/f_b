import React, { useContext } from 'react'

import authUserContext from '../context/authUserContext';

function User() {
  const authUser = useContext(authUserContext);
  return (
    <div>
      {authUser &&
        <p>{authUser.email}</p>
      }
    </div>
  );
}

export default User;
