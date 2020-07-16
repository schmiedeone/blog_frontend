import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Deck from "../../components/section/Deck";
import Query from "../../components/Query";

import client from "../../utils/apolloClient"; 
import ARTICLES_QUERY from "../../queries/article/articles";

describe("Deck", () => {
  test("Render the Deck of Cards", async () => {
    render(
      <Router>
        <ApolloProvider client={client}>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Deck elements={articles} />;
            }}
          </Query>
        </ApolloProvider>
      </Router>
    );
    expect(await screen.findAllByLabelText("card"));
    expect(await screen.findAllByRole("link"))
    expect(screen.getByLabelText("deck")).toBeInTheDocument();
  });
});
