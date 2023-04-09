import React from "react";
export default function Newsitems(props) {
  return (
    <div className="my-3">
      <div className="card">
        <img src={props.urlToImage} className="card-img-top" alt="Card image cap" style={{ height: "10rem" }} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
