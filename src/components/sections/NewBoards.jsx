import { useEffect, useState } from "react"
import NewItem from "./NewItem";

const NewBoards = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
        fetch(url).then(response => response.json()).then(data=> setArticles(data.articles))

    }, [])
  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        {articles.map((news, index) =>{
            return <NewItem key={index} title={news.title} description = {news.description} src={news.urlToImage} url={news.url} />
        })}
    </div>
  )
}

export default NewBoards