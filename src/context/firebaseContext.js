import { createContext } from 'react';

const firebaseContext = createContext(null);

const FirebaseProvider = firebaseContext.Provider;
const FirebaseConsumer = firebaseContext.Consumer;

export {
  FirebaseProvider,
  FirebaseConsumer,
};

export default firebaseContext;
