import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Field({ label, type, initialValue }) {
  const [fieldValue, setFieldValue] = useState(initialValue);
  return (
    <React.Fragment>
      <label htmlFor={label}>
        {label}
        <input
          name={label}
          type={type}
          value={fieldValue}
          onChange={({ target: { value } }) => setFieldValue(value)}
        />
      </label>
    </React.Fragment>
  );
}

Field.defaultProps = {
  type: 'text',
  initialValue: '',
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  initialValue: PropTypes.string,
};

export default Field;
