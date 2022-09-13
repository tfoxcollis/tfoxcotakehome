import React from 'react'
import "./ArticleCard.css"

const ArticleCard = ({title, description, author, link, image, published, id}) => {
  return (
    <div className="article-card">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{published}</p>
    </div>
  )
}

export default ArticleCard