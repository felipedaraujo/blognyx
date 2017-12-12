/**
 * @overview Our main app layout.
 */
import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';

const App = ({ children }) => (
  <div>
    <Navigation/>

    <div className='mx-3'>
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
