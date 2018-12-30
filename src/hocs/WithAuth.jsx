import React, { useEffect } from 'react';
import firebase from '../firebase';

const auth = firebase.auth();

const WithAuth = WrappedComponent => () => {
  const onAuthStateChanged = () => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  };

  const createNewUser = async (userEmail, userPassword) => {
    try {
      await auth.createUserWithEmailAndPassword(userEmail, userPassword);
      console.log(`User ${userEmail} was successfully registered!`);
    } catch (err) {
      console.error(err);
    }
  };
  const Auth = {
    createNewUser,
  };

  useEffect(() => {
    onAuthStateChanged();
  });

  return (
    <WrappedComponent {...Auth} />
  );
}

export default WithAuth;
