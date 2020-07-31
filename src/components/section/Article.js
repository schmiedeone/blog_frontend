import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Query from "../Query";
import SlugQuery from "../SlugQuery";

import ARTICLE_QUERY from "../../queries/article/article";
import ARTICLE_SLUG_QUERY from "../../queries/article/article_by_slug";

import universalStyles from "../../utils/universalStyles";

const useStyles = makeStyles((theme) => ({
  articleContainer: {
    padding: "0.5rem",
    margin: "auto",
  },
  articleImage: {
    width: "100%",
    paddingTop: "60%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "Relative",
    margin: "auto",
  },

  articleContent: {
    // width: "80%",
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
    // float: "right",
    // textTransform: "uppercase",
    // paddingTop: "1rem",
    // margin: "0",
  },
}));

const Article = () => {
  const classes = useStyles();
  const universalClasses = universalStyles();
  let { slug } = useParams();
  return (
    <SlugQuery query={ARTICLE_SLUG_QUERY} slug={slug}>
      {({ data: { articles } }) => {
        const article = articles[0];
        const imageUrl = !!article.image
        ? article.image[0].url
        : "";
        return (
          <div className={universalClasses.container}>
            <div className={classes.articleContainer}>
              <div id="banner" aria-label="article banner">
                <h1>{article.title}</h1>
                {!!article.category ? (
                  <Link
                    to={`/category/${article.category.slug}`}
                    className={classes.articleCategory}
                  >
                    <h3>{article.category.name}</h3>
                  </Link>
                ) : (
                  ""
                )}
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
                    <Link to={`/author/${article.author.slug}`}>
                      <h2>{article.author.name}</h2>
                    </Link>

                    <p>
                      <Moment format="MMM Do YYYY">
                        {article.published_at}
                      </Moment>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </SlugQuery>
  );
};

export default Article;
