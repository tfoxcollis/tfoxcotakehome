import React from 'react'
import { useLocation } from "react-router";


const Showpage = () => {
  const { state: { article } } = useLocation()

  return (
    <div>{article.title}</div>
  )
}

export default Showpage