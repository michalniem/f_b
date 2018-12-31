import React, { useState, useContext, useEffect } from 'react';

import { AuthUserProvider } from '../context/authUserContext';
import firebaseContext from '../context/firebaseContext';

const WithAuthUser = WrappedComponent => (props) => {
  const [user, setUser] = useState(null);
  const { onAuthStateChanged } = useContext(firebaseContext);

  useEffect(() => {
    onAuthStateChanged((authUser) => {
      if (authUser !== user) {
        setUser(authUser);
      }
    });
  });

  return (
    <AuthUserProvider value={user}>
      <WrappedComponent {...props} />
    </AuthUserProvider>
  );
};

export default WithAuthUser;
