import React from "react";
import { useParams } from "react-router";

import Deck from "./Deck";
import Intro from "./Intro";
import Query from "../Query";

import universalStyles from "../../utils/universalStyles";

const Section = ({ query, queryName }) => {
  const universalClasses = universalStyles();
  let { id } = useParams();
  return (
    <div aria-label={queryName} className={universalClasses.container}>
      <Query query={query} id={!!id ? id : null}>
        {({ data }) => {
          console.log(data);
          return (
            <div>
              {!!data[queryName].name ? (
                <Intro
                  title={data[queryName].name}
                  description={data[queryName].description}
                />
              ) : (
                ""
              )}
              <Deck
                elements={
                  !!data[queryName].articles
                    ? data[queryName].articles
                    : data[queryName]
                }
              />
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Section;