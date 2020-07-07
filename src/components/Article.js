import React from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Query from "./Query";

import ARTICLE_QUERY from "../queries/article/article";

const Article = () => {
  let { id } = useParams();
  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? article.image[0].url
            : process.env.REACT_APP_BACKEND_URL + article.image[0].url;
        return (
          <div>
            <div
              id="banner"
              className="uk-height-medium uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
              data-src={imageUrl}
              data-srcset={imageUrl}
              data-uk-img
            >
              <h1>{article.title}</h1>
            </div>
            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <ReactMarkdown source={article.content} />
                <p>
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
                <Link
                  to={`/category/${article.category.id}`}
                  className="uk-link-reset"
                >
                  <h3>{article.category.name}</h3>
                </Link>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Article;
