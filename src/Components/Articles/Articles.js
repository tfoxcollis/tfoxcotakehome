import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'

const Articles = ({articles}) => {

  return (
    <div>
     { articles.map((article) => {
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
    }
    </div>
  )
}

export default Articles