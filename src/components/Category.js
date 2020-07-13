import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useParams } from "react-router";

import Deck from "./Deck";
import Query from "./Query";

import CATEGORY_ARTICLES_QUERY from "../queries/category/articles";

const useStyles = makeStyles((theme) => ({
  categoryTitle: {
    textTransform: "uppercase",
  },
}));

const Category = () => {
  const classes = useStyles();
  let { id } = useParams();
  return (
    <div aria-label="category">
      <Query query={CATEGORY_ARTICLES_QUERY} id={id}>
        {({ data: { category } }) => {
          return (
            <div>
              <div>
                <div>
                  <h1 className={classes.categoryTitle}>{category.name}</h1>
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
