import { createContext } from 'react';

const authUserContext = createContext(null);

const AuthUserProvider = authUserContext.Provider;
const AuthUserConsumer = authUserContext.Consumer;

export {
  AuthUserProvider,
  AuthUserConsumer,
};

export default authUserContext;
