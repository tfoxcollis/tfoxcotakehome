import React, { useState } from 'react'
import './App.css';
import { Route } from "react-router-dom";
import Dropdown from '../Dropdown/Dropdown';
import Articles from '../Articles/Articles'
import Showpage from '../Showpage/Showpage';
import Nav from '../Nav/Nav';
import Sort from '../Sort/Sort';

const App = () => {

  const [cleanArticles, setCleanArticles] = useState([])

  return (
    <div className="main">
      <Route exact path="/">
        <Dropdown setCleanArticles={setCleanArticles}/>
        <Sort cleanArticles={cleanArticles} setCleanArticles={setCleanArticles} />
        <Articles cleanArticles={cleanArticles}/>
      </Route>

      <Route exact path="/showpage">
        <Nav />
        <Showpage />
      </Route>
      
    </div>
  )
}

export default App