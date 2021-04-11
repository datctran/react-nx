
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import modules from './modules';
import Navbar from './modules/base/nav-bar/nav-bar';
// import styles from './app.module.scss';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <Router>
      <Navbar></Navbar>
      <div className="App">
        <header className="App-header">
          <ul className="App-nav">
            {modules.map(module => (
              <li key={module.name} className={currentTab === module.name ? 'active' : ''}>
                <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Link>
              </li>
            ))}
          </ul>
        </header>
        <div className="App-content">
          {modules.map(module => (
            <Route {...module.routeProps} key={module.name} />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
