import React from 'react';

import Form from './containers/Form/Form';
import User from './components/User';
import WithAuthUser from './hocs/WithAuthUser';

const App = () => (
  <div>
    <Form />
    <User />
  </div>
);

export default WithAuthUser(App);
