import React from "react";

import Deck from "./Deck";
import Query from "./Query";

import ARTICLES_QUERY from "../queries/article/articles";

const Content = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h2>Batch's Strapi/React Blog</h2>
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