import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setArticles } from "../redux/actions/Actions";

export default function Fake() {
  const articles = useSelector((state) => state.dataReducer.data);
//   console.log(">>>>>>>>>>>>>>", articles);
//   const { name, price } = articles[0];
  useEffect(() => {
    updateNews();
  }, []);
  const dispatch = useDispatch()
  console.log(">>>>>>>>>>>>>>", articles);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=b28f7924f466407f87d17e00b67140d7&page=1&pageSize=6`;
    let urlData = await fetch(url);
    let parsedData = await urlData.json();

    dispatch(setArticles(parsedData.articles));
  };
  return (
    <div className="container">
      {/* <div className="text-center">{name}</div>
      <div className="text-center">{price}</div> */}
    </div>
  );
}
