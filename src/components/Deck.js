import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";

import Card from "./Card";

import universalStyles from "../utils/universalStyles";

const useStyles = makeStyles((theme) => ({
  deck: {
    // width: "100%",
    // margin: "auto",
  },

  deckMobile: {
    width: "100%",
  },

  deckTablet: {
    width: "100%",
    float: "left",
  },

  deckTabletLeft: {
    width: "65%",
    float: "left",
  },

  deckTabletRight: {
    width: "35%",
    float: "right",
  },

  deckDesktop: {
    width: "100%",
    float: "left",
  },

  deckDesktopLeft: {
    width: "50%",
    float: "left",
  },

  deckDesktopRight: {
    width: "25%",
    float: "right",
  },
}));

const Deck = ({ articles }) => {
  const classes = useStyles();
  const universalClasses = universalStyles();
  const theme = useTheme();
  const mobileSize = useMediaQuery(theme.breakpoints.down("xs"));
  const tabletSize = useMediaQuery(theme.breakpoints.down("sm"));

  const MobileView = ({ articles }) => {
    return (
      <div className={classes.deckMobile}>
        {articles.map((article, i) => {
          return <Card article={article} key={`article__${article.id}`} />;
        })}
      </div>
    );
  };

  const TabletView = ({ articles }) => {
    const leftArticlesCount = Math.ceil((2 * articles.length) / 5);
    const leftArticles = articles.slice(0, leftArticlesCount);
    const rightArticles = articles.slice(leftArticlesCount, articles.length);

    return (
      <div className={classes.deckTablet}>
        <div className={classes.deckTabletLeft}>
          {leftArticles.map((article, i) => {
            return <Card article={article} key={`article__${article.id}`} />;
          })}
        </div>
        <div>
          <div className={classes.deckTabletRight}>
            {rightArticles.map((article, i) => {
              return <Card article={article} key={`article__${article.id}`} />;
            })}
          </div>
        </div>
      </div>
    );
  };

  const DesktopView = ({ articles }) => {
    const leftArticlesCount = Math.ceil(articles.length / 5);
    const leftArticles = articles.slice(0, leftArticlesCount);
    const rightArticles = articles.slice(leftArticlesCount, articles.length);

    const rightArticlesCount = Math.ceil(rightArticles.length / 2);
    const rightArticles2 = rightArticles.slice(0, rightArticlesCount);
    const rightArticles1 = rightArticles.slice(
      rightArticlesCount,
      rightArticles.length
    );

    return (
      <div className={classes.deckDesktop}>
        <div className={classes.deckDesktopLeft}>
          {leftArticles.map((article, i) => {
            return <Card article={article} key={`article__${article.id}`} />;
          })}
        </div>
        <div>
          <div className={classes.deckDesktopRight}>
            {rightArticles1.map((article, i) => {
              return <Card article={article} key={`article__${article.id}`} />;
            })}
          </div>
          <div className={classes.deckDesktopRight}>
            {rightArticles2.map((article, i) => {
              return <Card article={article} key={`article__${article.id}`} />;
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div aria-label="deck" className={universalClasses.container}>
      <div>
        {mobileSize ? (
          <MobileView articles={articles} />
        ) : tabletSize ? (
          <TabletView articles={articles} />
        ) : (
          <DesktopView articles={articles} />
        )}
      </div>
    </div>
  );
};

export default Deck;
