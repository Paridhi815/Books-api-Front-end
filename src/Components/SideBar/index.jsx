import React from 'react';
import './index.css';

const SideBar = () => (
  <div className="SideBar">
    <h2 className="SideBar-Heading">Bs</h2>
    <div className="SideBar-button-container">
      <button className="SideBar-button" >
        <i className="material-icons">refresh</i>
      </button>
      <button className="SideBar-button" >
        <i className="material-icons">settings</i>
      </button>
    </div>
  </div>
);

export default SideBar;
