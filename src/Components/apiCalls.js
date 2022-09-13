const fetchArticles = (value) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${value}.json?api-key=JsQprvR3AxtEjihmiJ22Naq8EPJ9RyC1`)
    .then(response => response.json())
}

export default fetchArticles