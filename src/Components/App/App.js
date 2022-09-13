import React, { useState } from 'react'
import './App.css';
import { Route } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Dropdown from '../Dropdown/Dropdown';
import Articles from '../Articles/Articles'

const App = () => {

  const [cleanArticles, setCleanArticles] = useState([])

  return (
    <div className="main">
      <Route exact path="/">
        <Dashboard />
        <Dropdown setCleanArticles={setCleanArticles}/>
        <Articles cleanArticles={cleanArticles}/>
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