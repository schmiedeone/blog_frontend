import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useParams } from "react-router";

import Deck from "./Deck";
import Query from "./Query";

import AUTHOR_ARTICLES_QUERY from "../queries/author/articles";
import universalStyles from "../utils/universalStyles";


const useStyles = makeStyles((theme) => ({
  authorTitle: {
    textTransform: "uppercase",
  },
}));

const Author = () => {
  const classes = useStyles();
  const universalClasses = universalStyles();
  let { id } = useParams();
  return (
    <div aria-label="author" className={universalClasses.container}>
      <Query query={AUTHOR_ARTICLES_QUERY} id={id}>
        {({ data: { author } }) => {
          return (
            <div>
              <h1 className={classes.authorTitle}>{author.name}</h1>
              <Deck articles={author.articles} />
            </div>
          );
        }}
      </Query>
    </div>
  );
};
export default Author;