import { createMemoryHistory } from "history";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Article from "../../components/section/Article";
import client from "../../utils/apolloClient";

describe("Article", () => {
  test("Article renders properly", async () => {
    const history = createMemoryHistory();
    const route = "/article/5f1ef5748f9380001ce10bb7";
    history.push(route);
    render(
      <Router history={history}>
        <ApolloProvider client={client}>
          <Switch>
            <Route path="/article/:id" component={Article} exact />
          </Switch>
        </ApolloProvider>
      </Router>
    );
    expect(await screen.findByLabelText("article banner")).toBeInTheDocument();
    expect(await screen.findAllByRole("heading"));
    expect(await screen.findAllByRole("link"));
  
  });
});
