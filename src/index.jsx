import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Firebase from './firebase';
import { FirebaseProvider } from './context/firebaseContext';

const Register = ({ Component }) => (
  <FirebaseProvider value={new Firebase(firebase)}>
    <Component />
  </FirebaseProvider>
);

ReactDOM.render(
  <Register Component={App} />,
  document.getElementById('root'),
);
serviceWorker.unregister();
