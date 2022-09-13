import React, { useState } from 'react'
import './App.css';
import { Route } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Dropdown from '../Dropdown/Dropdown';

const App = () => {

  const [articles, setArticles] = useState()

  return (
    <div className="main">
      <Route exact path="/">
        <Dashboard />
        <Dropdown setArticles={setArticles}/>
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