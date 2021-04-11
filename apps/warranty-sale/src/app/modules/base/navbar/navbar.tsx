import React, { useState } from "react";
import modules from "../..";
import logo from "../../../../assets/logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <nav className="flex bg-green-500 justify-between">
      <div className="flex items-center text-white  p-2">
        <img src={logo}
          alt="Warranty Sale logo"
          className="object-scale-down w-10 h-10 pr-2" />
        <div className="font-semibold text-xl tracking-tight">Warranty Sale</div>
      </div>
      <div className="items-center">
        <ul className="inline-flex">
          {modules.map(module => (
            <li key={module.name} className="p-1">
              <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="items-end p-2">
        <div className="bg-white flex items-center rounded-full shadow-xl">
          <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search"></input>
          <div className="p-1">
            <button className="bg-blue-500 text-white rounded-full p-1 hover:bg-blue-400 focus:outline-none w-10 h-10 flex items-center justify-center">
              ?
              </button>
          </div>
        </div>
      </div>
    </nav >
  );
}
