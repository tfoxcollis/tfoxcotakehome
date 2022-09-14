import React from 'react'
import { useLocation } from "react-router";
import "./Showpage.css"


const Showpage = () => {
  const { state: { article } } = useLocation()

  return (
    <div className="showpage-container">
      <div className="info-container">
        <div className="showpage-title">
          <h1>{article.title}</h1>
        </div>

        <img src={article.image} className="image"/>
        
        <div className="showpage-author">
         <p>{article.author}</p>
        </div>

        <div className="showpage-description">
          <h3>{article.description}</h3>
        </div>
        <div className="showpage-publication">
          <p>{article.published}</p>
        </div>
    
        <form action={article.link}>
          <input type="submit" value="Go to NYT" />
        </form>

      </div>
    </div>
  )
}

export default Showpage