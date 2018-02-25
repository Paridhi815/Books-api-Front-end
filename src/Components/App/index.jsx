import React from 'react';
import './index.css';
import SideBar from '../SideBar';
import Header from '../Header';
import Body from '../Body/index';

const App = () => (
  <div className="App">
    <SideBar />
    <div className="App-column">
      <Header> The <span className="Header-big-text">Book</span> Shelf </Header>
      <Body />
    </div>
  </div>
);

export default App;
