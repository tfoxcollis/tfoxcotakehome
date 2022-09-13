import React from 'react'
import "./ArticleCard.css"

const ArticleCard = ({title, description, author, link, image, published, id}) => {
  return (
    <div className="article-card">
      <h2>{title}</h2>
    </div>
  )
}

export default ArticleCard