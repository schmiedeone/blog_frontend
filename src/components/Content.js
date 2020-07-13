import React from "react";

import Deck from "./Deck";
import Query from "./Query";

import ARTICLES_QUERY from "../queries/article/articles";

import universalStyles from "../utils/universalStyles";

const Content = ({ blogName }) => {
  const universalClasses = universalStyles();
  return (
    <div className={universalClasses.container}>
      <h1>{blogName}</h1>
      <Query query={ARTICLES_QUERY}>
        {({ data: { articles } }) => {
          return <Deck articles={articles} />;
        }}
      </Query>
    </div>
  );
};

export default Content;
