import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'
import "./Articles.css"

const Articles = ({cleanArticles}) => {

  const createCards = cleanArticles.map((article) => {
    return (
      <ArticleCard
        title={article.title}
        key={article.id}
        id={article.id}
        description={article.description}
        author={article.author}
        link={article.link}
        image={article.image}
        published={article.published}
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