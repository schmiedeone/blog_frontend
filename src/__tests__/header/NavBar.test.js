import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import NavBar from "../../components/header/NavBar";
import client from "../../utils/apolloClient";
import data from "../../utils/data";

describe("NavBar", () => {
  test("Navbar renders with main link and categories", async () => {
    render(
      <Router>
        <ApolloProvider client={client}>
          <NavBar name={data.blogName} />
        </ApolloProvider>
      </Router>
    );
    expect(screen.getAllByText("Loading"));
    // expect(await screen.findByText(data.blogName)).toBeInTheDocument();
    expect(await screen.findByRole("list")).toBeInTheDocument();
    expect(await screen.findByRole("img")).toBeInTheDocument();
    expect(await screen.findByText("categories")).toBeInTheDocument();
    expect(await screen.findByText("authors")).toBeInTheDocument();
  });
});
