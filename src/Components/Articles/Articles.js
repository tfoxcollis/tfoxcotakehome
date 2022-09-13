import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'
import "./Articles.css"

const Articles = ({cleanArticles}) => {

  const createCards = cleanArticles.map((article) => {
    return (
      <ArticleCard
        key={article.id}
        article={article}
      />
    )
   })
  return (
    <div className="articles-container">
     {createCards}
    </div>
  )
}

export default Articles