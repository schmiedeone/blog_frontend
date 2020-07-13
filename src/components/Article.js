import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Query from "./Query";

import ARTICLE_QUERY from "../queries/article/article";

import universalStyles from "../utils/universalStyles";

const useStyles = makeStyles((theme) => ({
  articleImage: {
    width: "100%",
    paddingTop: "60%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "Relative",
  },

  articleCategory: {
    float: "right",
    textTransform: "uppercase",
    paddingTop: "1rem",
    margin: "0",
  },

  articleText: {
    width: "80%",
    paddingTop: "2rem",
    margin: "auto",
  }
}));

const Article = () => {
  const classes = useStyles();
  const universalClasses = universalStyles();
  let { id } = useParams();
  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? article.image[0].url
            : process.env.REACT_APP_BACKEND_URL + article.image[0].url;
        return (
          <div className={universalClasses.container}>
            <div id="banner" aria-label="article banner">
              <h1>{article.title}</h1>
            </div>

            <div
              className={universalClasses.backgroundImage}
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: `center`,
              }}
            />
            <div>
              <div className={classes.articleText}>
                <ReactMarkdown source={article.content} />
                <p>
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
                <Link to={`/category/${article.category.id}`}>
                  <h3 className={classes.articleCategory}>
                    {article.category.name}
                  </h3>
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
