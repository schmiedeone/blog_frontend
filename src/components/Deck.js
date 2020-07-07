import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  deckContainer: {
    width: "100%",
  },

  deck: {
    // width: "100%",
    // margin: "auto",
  },

  deckLeft: {
    width: "50%",
    float:"left",
    padding: "2.5%",
  },

  deckRight: {
    width: "40%",
    float:"right",
    padding: "2.5%",
  },
}));

const Deck = ({ articles }) => {
  const classes = useStyles();

  const leftArticlesCount = Math.ceil(articles.length / 3);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div aria-label="deck">
      <div>
        <div className={classes.deckLeft}>
          {leftArticles.map((article, i) => {
            return <Card article={article} key={`article__${article.id}`} />;
          })}
        </div>
        <div>
          <div className={classes.deckRight}>
            {rightArticles.map((article, i) => {
              return <Card article={article} key={`article__${article.id}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deck;

