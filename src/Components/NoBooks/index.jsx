import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const NoBooks = props => (
  <div className="NoBooks-container">
    <div className="NoBooks-message">
      <h2>Oops! No books found!</h2>
      <h2>Import them Now?</h2>
      <button className="NoBooks-refresh-button" onClick={() => props.onSync()}>
        <i className="material-icons">refresh</i>
      </button>
    </div>
  </div>
);

NoBooks.propTypes = {
  onSync: PropTypes.func.isRequired,
};

export default NoBooks;
