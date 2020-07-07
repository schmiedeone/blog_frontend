import React from "react";
import { useParams } from "react-router";

import Deck from "./Deck";
import Query from "./Query";

import CATEGORY_ARTICLES_QUERY from "../queries/category/articles";

const Category = () => {
  let { id } = useParams();
  return (
    <div aria-label="category">
      <Query query={CATEGORY_ARTICLES_QUERY} id={id}>
        {({ data: { category } }) => {
          return (
            <div>
              <div className="uk-section">
                <div className="uk-container uk-container-large">
                  <h1>{category.name}</h1>
                  <Deck articles={category.articles} />
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Category;
