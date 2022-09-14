import React from 'react'
import "./ArticleCard.css"
import { Link } from 'react-router-dom';


const ArticleCard = (props) => {

  const article = props.article

  return (
    <Link to={{pathname:'/showpage', state:{article: article}}} >
      <div className="article-card">
        <div className="article-text">
          <h3>Title: {article.title}</h3>
          <p>{article.author}</p>
          <p>Published Date: {article.published}</p>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard