import React from "react";

import Deck from "./Deck";
import Query from "./Query";

import ARTICLES_QUERY from "../queries/article/articles";

const Content = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>SchmieBlog.one</h1>
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