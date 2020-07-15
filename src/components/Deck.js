import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";

import Card from "./Card";

import universalStyles from "../utils/universalStyles";

const useStyles = makeStyles((theme) => ({
  deck: {
    width: "100%",
    display: "block",
  },

  deckFat: {
    width: "49.95%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    float: "left",
  },

  deckThin: {
    width: "25%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    float: "left",
  },
}));

const Deck = ({ articles }) => {
  const classes = useStyles();
  const universalClasses = universalStyles();
  const theme = useTheme();
  const mobileSize = useMediaQuery(theme.breakpoints.down("xs"));
  const tabletSize = useMediaQuery(theme.breakpoints.down("sm"));

  const DeckCutter = ({ articles }) =>
    articles.map((article, index) => {

      const modulo = mobileSize ? 1 : tabletSize ? 2 : 5;
      const widthClass =
        index % modulo === 0 ? classes.deckFat : classes.deckThin;

      return (
        <div className={widthClass}>
          <Card article={article} key={`article__${article.id}`} />
        </div>
      );
    });

  return (
    <div aria-label="deck" className={universalClasses.container}>
      <div className={classes.deck}>
        <DeckCutter articles={articles} />
      </div>
    </div>
  );
};

export default Deck;
