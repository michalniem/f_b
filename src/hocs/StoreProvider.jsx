import React from 'react';
import PropTypes from 'prop-types';

import createStore from '../store/store';
import { Provider } from '../context/storeContext';
import { reducer, initialState } from '../store/reducer';

function StoreProvider({ children }) {
  const store = createStore(reducer, initialState);
  return (
    <Provider value={store}>
      {children}
    </Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
