import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'

const Articles = ({articles}) => {

  return (
    <div>
     { articles.map((article, index) => {
       return (
         <ArticleCard
         title={article.title}
         key={index}

         />
       )
      })
    }
    </div>
  )
}

export default Articles