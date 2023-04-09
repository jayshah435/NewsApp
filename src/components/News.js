import React, { useState, useEffect } from "react";
import Newsitems from "./Newsitems";
import { Waypoint } from "react-waypoint";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { setArticles, setPage, setTotalResults } from "../redux/actions/Actions";

const News = (props) => {
  
  // const [articles, setArticles] = useState([]);
  // const [totalResults, setTotalResults] = useState(0);
  // const [page, setPage] = useState(1);

  let capitalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const dispatch = useDispatch()

  const articles = useSelector((state)=>(state.allArticles.articles))
  const totalResults = useSelector((state)=> (state.allArticles.totalResults))
  const page = useSelector((state)=>(state.allArticles.page))

  useEffect(() => {
    updateNews();
  }, []);

  console.log("articles", articles.length);
  console.log("totalResultssssss", totalResults);
  console.log("page", page);


  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let urlData = await fetch(url);
    let parsedData = await urlData.json();
    
    dispatch(setArticles(parsedData.articles))
    dispatch(setTotalResults(parsedData.totalResults))

    // setArticles(parsedData.articles);
    // setTotalResults(parsedData.totalResults);
  };

  const loadMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    dispatch(setPage(page + 1))
    // setPage(page + 1);

    let urlData = await fetch(url);
    let parsedData = await urlData.json();
    dispatch(setArticles(articles.concat(parsedData.articles)))
    dispatch(setTotalResults(parsedData.totalResults))

    // setArticles(articles.concat(parsedData.articles));
    // setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="container my-3">
      <h2 className="text-center">Top {capitalize(props.category)} Headlines</h2>
      {articles === undefined ? (
        <Loader />
      ) : articles.length === 0 ? (
        "No Data Foun"
      ) : (
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitems
                  title={element.title}
                  description={element.description}
                  urlToImage={element.urlToImage}
                />
              </div>
            );
          })}
        </div>
      )}

      {articles.length !== totalResults ? (
          <Waypoint onEnter={loadMoreData}>
          <div>
            <Loader />
          </div>
        </Waypoint>
      ) : ''
}
    </div>
  );
};

export default News;
