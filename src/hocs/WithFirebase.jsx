import React from 'react';

import { FirebaseConsumer } from '../context/firebaseContext';

const WithFirebase = WrappedComponent => () => (
  <FirebaseConsumer>
    {firebase => <WrappedComponent {...firebase} />}
  </FirebaseConsumer>
);

export default WithFirebase;
