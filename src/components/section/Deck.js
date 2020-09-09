import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import { Textfit } from "react-textfit";

import Card from "./Card";

import universalStyles from "../../utils/universalStyles";

const useStyles = makeStyles((theme) => ({
  deck: {
    width: "100%",
  },

  deckContainer: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    float: "left",
  },

  soloCardText: {
    padding: "1rem",
    [theme.breakpoints.down(600)]: {
      display: "none",
    },
    height: "500px",
    [theme.breakpoints.down(1280)]: {
      height: "40vw",
    },
  },
}));

const Deck = ({ elements }) => {
  const theme = useTheme();
  const classes = useStyles();
  const universalClasses = universalStyles();
  let content = elements[0];

  const author = content?.author?.name ?? "";
  const title = content?.title ?? content?.name ?? "";

  return (
    <div aria-label="deck" className={universalClasses.container}>
      <div className={classes.deck}>
        {elements.length === 1 ? (
          <div>
            <div className={classes.deckContainer}>
              <Card
                content={content}
                title={bigScreen ? "" : title}
                author={bigScreen ? "" : author}
              />
            </div>
            <div className={classes.deckContainer}>
              <Textfit mode="multi" className={classes.soloCardText} min={10}>
                <h1>{title}</h1>
                <h2>{author}</h2>
              </Textfit>
            </div>
          </div>
        ) : (
          <div>
            {elements.map((content, index) => (
              <div
                className={classes.deckContainer}
                key={`content_${content.id}`}
                id={`card_${index}`}
              >
                <Card content={content} title={title} author={author} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Deck;
