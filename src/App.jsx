import React from 'react';
import firebase from 'firebase';

import Form from './containers/Form/Form';
import Firebase from './firebase';
import { FirebaseProvider } from './context/firebaseContext';

const App = () => (
  <FirebaseProvider value={new Firebase(firebase)}>
    <div>
      <Form />
    </div>
  </FirebaseProvider>
);

export default App;
