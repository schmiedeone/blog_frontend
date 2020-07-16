import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Query from "../Query";

import ARTICLE_QUERY from "../../queries/article/article";

import universalStyles from "../../utils/universalStyles";

const useStyles = makeStyles((theme) => ({
  articleImage: {
    width: "100%",
    paddingTop: "60%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "Relative",
  },

  articleContent: {
    width: "80%",
    paddingTop: "2rem",
    margin: "auto",
  },

  articleText: {
    paddingBottom: "1rem",
  },

  articleDetails: {
    color: theme.palette.primary.contrastText,
  },

  articleCategory: {
    float: "right",
    textTransform: "uppercase",
    paddingTop: "1rem",
    margin: "0",
  },
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
              <div className={classes.articleContent}>
                <ReactMarkdown
                  source={article.content}
                  className={classes.articleText}
                />
                <div className={classes.articleDetails}>
                  <Link to={`/author/${article.author.id}`}>
                    <h2>{article.author.name}</h2>
                  </Link>
                  {!!article.category ? (
                    <Link
                      to={`/category/${article.category.id}`}
                      className={classes.articleCategory}
                    >
                      <h3>{article.category.name}</h3>
                    </Link>
                  ) : (
                    <div />
                  )}
                  <p>
                    <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Article;
