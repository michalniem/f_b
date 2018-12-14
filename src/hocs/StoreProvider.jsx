import React from 'react';
import PropTypes from 'prop-types';

import StoreContext from '../context/StoreContext';
import createStore from '../store/store';
import { reducer, initialState } from '../store/reducer';

function StoreProvider({ children }) {
  const store = createStore(reducer, initialState);
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;
