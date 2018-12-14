import React, { useReducer } from 'react';

import reducer, { initialState } from '../store/store';

function Connect(WrappedComponent) {
  return () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <WrappedComponent store={{ state, dispatch }} />
    );
  };
}

export default Connect;
