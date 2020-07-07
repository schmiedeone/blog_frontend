import React from "react";

import Deck from "./Deck";
import Query from "./Query";

import ARTICLES_QUERY from "../queries/article/articles";

const Content = ({ blogName }) => {
  return (
    <div>
        <div>
          <div>
          <h1>{blogName}</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Deck articles={articles} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};


export default Content;