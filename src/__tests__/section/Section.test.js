import { createMemoryHistory } from "history";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Section from "../../components/section/Section";

import client from "../../utils/apolloClient";

import ARTICLES_QUERY from "../../queries/article/articles";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";
import CATEGORIES_QUERY from "../../queries/category/categories";
import AUTHOR_ARTICLES_QUERY from "../../queries/author/articles";
import AUTHORS_QUERY from "../../queries/author/authors";

describe("Home Content", () => {
  test("Home Content renders properly", async () => {
    const history = createMemoryHistory();
    const route = "/";
    history.push(route);
    render (
      <Router history={history}>
        <ApolloProvider client={client}>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Section query={ARTICLES_QUERY} queryName={"articles"} />
              )}
            />
          </Switch>
        </ApolloProvider>
      </Router>
    );
    expect(await screen.findByLabelText("deck")).toBeInTheDocument();
    expect(await screen.findAllByLabelText("card"));
  });
});

describe("Category Content", () => {
  test("Category Content renders properly", async () => {
    const history = createMemoryHistory();
    const route = "/category/3";
    history.push(route);
    render (
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
    expect(await screen.findAllByLabelText("intro"));
    expect(await screen.findAllByRole("heading"));
  });
});

describe("Author Content", () => {
  test("author Content renders properly", async () => {
    const history = createMemoryHistory();
    const route = "/author/7";
    history.push(route);
    render (
      <Router history={history}>
        <ApolloProvider client={client}>
          <Switch>
            <Route
              exact
              path="/author/:id"
              component={() => (
                <Section query={AUTHOR_ARTICLES_QUERY} queryName={"author"} />
              )}
            />
          </Switch>
        </ApolloProvider>
      </Router>
    );
    expect(await screen.findByLabelText("author")).toBeInTheDocument();
    expect(await screen.findByLabelText("deck")).toBeInTheDocument();
    expect(await screen.findAllByLabelText("card"));
    expect(await screen.findAllByLabelText("intro"));
    expect(await screen.findAllByRole("heading"));
  });
});

describe("Categories Content", () => {
  test("Categories Content renders properly", async () => {
    const history = createMemoryHistory();
    const route = "/categories";
    history.push(route);
    render(
      <Router history={history}>
        <ApolloProvider client={client}>
          <Switch>
            <Route
              exact
              path="/categories"
              component={() => (
                <Section query={CATEGORIES_QUERY} queryName={"categories"} />
              )}
            />
          </Switch>
        </ApolloProvider>
      </Router>
    );
    expect(await screen.findByLabelText("categories")).toBeInTheDocument();
    expect(await screen.findByLabelText("deck")).toBeInTheDocument();
    expect(await screen.findAllByLabelText("card"));
  });
});

describe("Authors Content", () => {
  test("Authors Content renders properly", async () => {
    const history = createMemoryHistory();
    const route = "/authors";
    history.push(route);
    render(
      <Router history={history}>
        <ApolloProvider client={client}>
          <Switch>
            <Route
              exact
              path="/authors"
              component={() => (
                <Section query={AUTHORS_QUERY} queryName={"authors"} />
              )}
            />
          </Switch>
        </ApolloProvider>
      </Router>
    );
    expect(await screen.findByLabelText("authors")).toBeInTheDocument();
    expect(await screen.findByLabelText("deck")).toBeInTheDocument();
    expect(await screen.findAllByLabelText("card"));
  });
});
