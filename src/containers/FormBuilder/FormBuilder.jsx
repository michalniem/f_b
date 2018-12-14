import React from 'react';

import Connect from '../../hocs/Connect';
import Input from '../../components/Input/Input';

const formBuilderStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid red',
};

const buttonStyles = {
  width: '10%',
  height: '50px',
  margin: '0 auto',
};

function FormBuilder({ store: { state, dispatch } }) {
  return (
    <div style={formBuilderStyles}>
      <h1>FormBuilder</h1>
      {state && state.map(form => (
        <Input {...form} key={form.question} />
      ))}
      <button style={buttonStyles} onClick={() => dispatch({ type: 'ADD_INPUT' })}>Add Input</button>
    </div>
  );
}

export default Connect(FormBuilder);
