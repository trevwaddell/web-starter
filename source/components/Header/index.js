import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Header = ({ children }) => (
  <h1>
    {children}
  </h1>
);

Header.propTypes = propTypes;

export default Header;
