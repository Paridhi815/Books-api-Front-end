import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Header = props => (
  <div className="Header">
    <header className="Header-heading">
      {props.children}
    </header>
  </div>
);

Header.propTypes = {
  children: PropTypes.string,
};

Header.defaultProps = {
  children: '',
};

export default Header;
