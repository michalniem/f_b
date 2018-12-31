import React, { useContext } from 'react';

import firebaseContext from '../context/firebaseContext';
import authUserContext from '../context/authUserContext';

function SignOut() {
  const { singOut } = useContext(firebaseContext);
  const authUser = useContext(authUserContext);
  return (
    <div>
      {authUser &&
        <>
          <p>{authUser.email}</p>
          <button onClick={singOut}>Sing Out</button>
        </>
      }
    </div>
  );
}

export default SignOut;
