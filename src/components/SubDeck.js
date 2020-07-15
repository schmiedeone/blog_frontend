import React from "react";
import { useParams } from "react-router";

import Deck from "./Deck";
import Query from "./Query";

import universalStyles from "../utils/universalStyles";

const Author = ({ query, queryName }) => {
  const universalClasses = universalStyles();
  let { id } = useParams();
  return (
    <div aria-label={queryName} className={universalClasses.container}>
      <Query query={query} id={!!id ? id : null}>
        {({ data }) => (
          <div>
            <h1>{!!data[queryName].name ? data[queryName].name : ""}</h1>
            <Deck
              articles={
                !!data[queryName].articles
                  ? data[queryName].articles
                  : data[queryName]
              }
            />
          </div>
        )}
      </Query>
    </div>
  );
};

export default Author;
