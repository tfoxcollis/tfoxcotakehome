import React from 'react'
import "./ArticleCard.css"

const ArticleCard = ({title, description, author, link, image, published, id}) => {

  const splitDate = () => {
    return published.split('T')[0]

  }

  return (
    <div className="article-card">
      <h3>Title: {title}</h3>
      <p>{author}</p>
      <p>Published Date: {splitDate()}</p>
    </div>
  )
}

export default ArticleCard