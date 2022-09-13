const fetchArticles = (value) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${value}.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
    .then(response => response.json())
}

export default fetchArticles