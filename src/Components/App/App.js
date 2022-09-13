import React from 'react'
import './App.css';
import { Route } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';

const App = () => {
  return (
    <div className="main">
      <Route exact path="/">
        {/* <Dropdown /> */}
        <Dashboard />
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