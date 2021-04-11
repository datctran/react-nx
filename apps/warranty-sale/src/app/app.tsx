
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import modules from './modules';
import Navbar from './modules/base/navbar/navbar';
// import styles from './app.module.scss';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <Router>
      <Navbar></Navbar>
      <div className="">
        {modules.map(module => (<Route {...module.routeProps} key={module.name} />))}
      </div>
    </Router>
  );
}

export default App;
