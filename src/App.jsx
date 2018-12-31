import React from 'react';

import Form from './containers/Form/Form';
import SignOut from './components/SignOut';
import WithAuthUser from './hocs/WithAuthUser';

const App = () => (
  <div>
    <Form />
    <SignOut />
  </div>
);

export default WithAuthUser(App);
