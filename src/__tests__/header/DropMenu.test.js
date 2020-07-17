import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import DropMenu from "../../components/header/DropMenu";

import client from "../../utils/apolloClient";

import AUTHORS_QUERY from "../../queries/author/authors";
import CATEGORIES_QUERY from "../../queries/category/categories";

describe("DropMenu", () => {
  test("DropMenu renders", async () => {
    render(
      <Router>
        <ApolloProvider client={client}>
          <DropMenu
            query={CATEGORIES_QUERY}
            queryName={"categories"}
            extension={"category"}
          />
        </ApolloProvider>
      </Router>
    );

    expect(screen.getByLabelText("drop menu")).toBeInTheDocument();

    fireEvent(
      screen.getByLabelText("drop menu button"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(await screen.findAllByRole("link"));
    expect(await screen.findByText("all categories")).toBeInTheDocument();
    expect(
      await screen.findByLabelText("drop menu item 0")
    ).toBeInTheDocument();

    fireEvent(
      screen.getByText("all categories"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
  });
});

describe("DropMenu", () => {
  test("DropMenu renders", async () => {
    render(
      <Router>
        <ApolloProvider client={client}>
          <DropMenu
            query={AUTHORS_QUERY}
            queryName={"authors"}
            extension={"author"}
          />
        </ApolloProvider>
      </Router>
    );

    expect(screen.getByLabelText("drop menu")).toBeInTheDocument();

    fireEvent(
      screen.getByLabelText("drop menu button"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(await screen.findAllByRole("link"));
    expect(await screen.findByText("all authors")).toBeInTheDocument();
    expect(
      await screen.findByLabelText("drop menu item 0")
    ).toBeInTheDocument();

    fireEvent(
      screen.getByText("all authors"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
  });
});
