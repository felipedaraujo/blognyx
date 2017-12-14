/**
 * @overview Our main app layout.
 */
import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './shared/Navigation';
import Footer from './shared/Footer';

const App = ({ children }) => (
  <div className="h-100">
    <Navigation />

    <div className="main">
      {children}
    </div>

    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
