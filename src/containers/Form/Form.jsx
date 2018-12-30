import React, { useState } from 'react';
import WithAuth from '../../hocs/WithAuth';

const Form = ({ createNewUser }) => {
  const [values, setValues] = useState({ userEmail: '', userPassword: '' });

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e, { userEmail, userPassword }) => {
    e.preventDefault();
    createNewUser(userEmail, userPassword);
  };

  return (
    <form onSubmit={e => handleSubmit(e, values)}>
      <label htmlFor="userEmail">Email</label>
      <br />
      <input
        type="emial"
        id="userEmail"
        value={values.userEmail}
        onChange={({ target }) => handleChange(target.id, target.value)}
      />
      <br />
      <label htmlFor="userEmail">Password</label>
      <br />
      <input
        type="password"
        id="userPassword"
        value={values.userPassword}
        onChange={({ target }) => handleChange(target.id, target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default WithAuth(Form);
