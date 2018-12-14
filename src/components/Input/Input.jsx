import React from 'react';
import PropTypes from 'prop-types';

import Field from '../Field/Field';
import Connect from '../../hocs/Connect';

const formStyles = {
  padding: '10px',
};

const buttonStyles = {
  width: '10%',
  height: '50px',
  margin: '0 auto',
};

function Input({
  condition,
  question,
  type,
  subInputs,
  store: {
    state,
    dispatch,
  }
}) {
  return (
    <div style={formStyles}>
      <Field label="Condition" initialValue={condition} />
      <Field label="Question" initialValue={question} />
      <Field label="Type" initialValue={type} />
      {subInputs && subInputs.map(subInput => (
        <Input {...subInput} />
      ))}
      <button style={buttonStyles} onClick={() => dispatch({ type: 'ADD_INPUT' })}>Add Input</button>
    </div>
  );
}

Input.propTypes = {
  condition: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  subInputs: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Connect(Input);
