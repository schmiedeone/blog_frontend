import { createMemoryHistory } from "history";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Section from "../../components/section/Section";

import client from "../../utils/apolloClient";

import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";

describe("Content", () => {
  test("Content renders properly", async () => {
    const history = createMemoryHistory();
    const route = "/category/3";
    history.push(route);
    render(
      <Router history={history}>
        <ApolloProvider client={client}>
          <Switch>
              <Route
                exact
                path="/category/:id"
                component={() => (
                  <Section
                    query={CATEGORY_ARTICLES_QUERY}
                    queryName={"category"}
                  />
                  )}
                />
          </Switch>
        </ApolloProvider>
      </Router>
    );
    expect(await screen.findByLabelText("category")).toBeInTheDocument();
    expect(await screen.findByLabelText("deck")).toBeInTheDocument();
    expect(await screen.findAllByLabelText("card"));
    expect(await screen.findAllByRole("heading"));
  });
});
