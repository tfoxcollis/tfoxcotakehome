import React from 'react'

const Sort = ({cleanArticles, setCleanArticles}) => {
  const oldArticles = [...cleanArticles]

  const ascending = () => {
    let ascendingDates = oldArticles.sort((a,b) => {
      return (a.published).localeCompare(b.published)
    })
    setCleanArticles(ascendingDates)
  }

  const descending = () => {
    let descendingDates = oldArticles.sort((a,b) => {
      return (b.published).localeCompare(a.published)
    })
    setCleanArticles(descendingDates)
  }

  return (
    <div>
      <button onClick={ascending}>
        Ascending order by date
      </button>
      <button onClick={descending}>
        Descending order by date
      </button>
    </div>
  )
}

export default Sort