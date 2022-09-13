import React from 'react'
import Select from 'react-select'
import fetchArticles from '../apiCalls'

const Dropdown = ( {setArticles} ) => {

  const articleValues = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]
  
  const cleanedArticles = (results) => {
    return results.map((result, index) => {
      return {
        id: index,
        title: result.title,
        description: result.abstract,
        author: results.byline,
        published: results.published_date,
        link: results.short.url,
        image: results.multimedia[0]?.url
      }
    })
  }

  const handleSelect = (e) => {
   fetchArticles(e.value)
    .then(data => {
      return setArticles(cleanedArticles(data.results))
    })
  }

  const options = articleValues.map((value) => {
    return (
      {
        value: value, label: value
      }
    )
  }) 

  return (
    <div>
      <Select 
      options={options} 
      onChange={(e) => handleSelect(e)}
      />
    </div>
  )
}

export default Dropdown


// https://api.nytimes.com/svc/topstories/v2