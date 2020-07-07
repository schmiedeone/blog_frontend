import React from "react";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image[0].url
      : process.env.REACT_APP_BACKEND_URL + article.image[0].url;
  return (
    <div aria-label="card">
      <Link to={`/article/${article.id}`} className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <img src={imageUrl} alt={article.image.url} height="100px" />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
