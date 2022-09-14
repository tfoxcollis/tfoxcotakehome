import React from 'react'
import { useLocation } from "react-router";
import "./Showpage.css"


const Showpage = () => {
  const { state: { article } } = useLocation()

  return (
    <div className="showpage-container">
      <div className="info-container">
        <div className="showpage-title">
          {article.title}
        </div>
        <div className="showpage-description">
          {article.description}
        </div>
        <div className="showpage-author">
          {article.author}
        </div>
        <div className="showpage-publication">
          {article.published}
        </div>

        <form action={article.link}>
          <input type="submit" value="Go to NYT" />
        </form>

      </div>
    </div>
  )
}

export default Showpage