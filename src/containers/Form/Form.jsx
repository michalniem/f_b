import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import firebaseContext from '../../context/firebaseContext';

const Form = () => {
  const [values, setValues] = useState({ userEmail: '', userPassword: '' });
  const { createNewUser } = useContext(firebaseContext);

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

export default Form;
