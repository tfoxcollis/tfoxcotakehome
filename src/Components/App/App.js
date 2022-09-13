import React from 'react'
import './App.css';
import { Route } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Dropdown from '../Dropdown/Dropdown';

const App = () => {
  return (
    <div className="main">
      <Route exact path="/">
        <Dashboard />
        <Dropdown />
      </Route>
{/* 
      <Route exact path="/showpage">
        <Nav />
        <Showpage />
      </Route> */}
      
    </div>
  )
}

export default App