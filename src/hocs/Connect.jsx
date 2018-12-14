import React, { useContext } from 'react';

import StoreContext from '../context/StoreContext';

function Connect(WrappedComponent) {
  return () => {
    const context = useContext(StoreContext);
    return (
      <WrappedComponent {...context} />
    );
  };
}

export default Connect;
