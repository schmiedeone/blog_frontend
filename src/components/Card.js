import React from "react";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image[0].url
      : process.env.REACT_APP_BACKEND_URL + article.image[0].url;
  return (
    <div aria-label="card">
      <Link to={`/article/${article.id}`} >
        <div>
          <div>
            <img src={imageUrl} alt={article.image.url} height="100px" />
          </div>
          <div>
            <p id="category" >
              {article.category.name}
            </p>
            <p id="title">
              {article.title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
