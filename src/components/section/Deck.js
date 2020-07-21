import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import Card from "./Card";
import Intro from "./Intro";

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
}));

const Deck = ({ elements }) => {
  const classes = useStyles();
  const universalClasses = universalStyles();
  let content = elements[0];
  return (
    <div aria-label="deck" className={universalClasses.container}>
      <div className={classes.deck}>
        {elements.length === 1 ? (
          <div>
            <div className={classes.deckContainer}>
              <Card content={content} />
            </div>
            <div className={classes.deckContainer}>
              <Intro
                title={!!content.title ? content.title : content.name}
                description={!!content.author ? content.author.name : ""}
              />
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
                <Card
                  content={content}
                  title={!!content.title ? content.title : content.name}
                  author={!!content.author ? content.author.name : ""}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Deck;
