import React from "react";
import { useParams } from "react-router";

import Deck from "./Deck";
import Intro from "./Intro";
import SlugQuery from "../SlugQuery";

import universalStyles from "../../utils/universalStyles";

const Section = ({ query, queryName, title }) => {
  const universalClasses = universalStyles();
  let { slug } = useParams();

  return (
    <div aria-label={queryName} className={universalClasses.container}>
      <SlugQuery query={query} slug={slug}>
        {({ data }) => {
          return (
            <div>
              {!!data[queryName][0].articles ? (
                <Intro
                  title={data[queryName][0].name}
                  description={data[queryName][0].description}
                  image={data[queryName][0].image}
                />
              ) : title ? (
                <Intro title={title} />
              ) : (
                    <div />
                  )}
              <Deck
                elements={
                  !!data[queryName][0].articles
                    ? data[queryName][0].articles
                    : data[queryName]
                }
              />
            </div>
          );
        }}
      </SlugQuery>
    </div>
  );
};

export default Section;
