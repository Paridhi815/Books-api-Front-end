import React from 'react';
import './index.css';

const SideBar = () => (
  <div className="SideBar">
    <h2 className="SideBar-Heading"><span className="Big-text">B</span>
      <span className="Small-text">S</span>
    </h2>
    <div className="SideBar-button-container">
      <button className="SideBar-button" >
        <i className="material-icons increaseSize">refresh</i>
      </button>
      <button className="SideBar-button" >
        <i className="material-icons increaseSize">settings</i>
      </button>
    </div>
  </div>
);

export default SideBar;
