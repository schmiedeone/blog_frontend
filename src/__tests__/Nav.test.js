import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Nav from "../components/Nav";
import client from "../utils/apolloClient";
import data from "../utils/data";

describe("Nav", () => {
  test("Navbar renders with main link and categories", async () => {
    render(
      <Router>
        <ApolloProvider client={client}>
          <Nav name={data.blogName} />
        </ApolloProvider>
      </Router>
    );
    expect(screen.getByText("Loading")).toBeInTheDocument();
    expect(await screen.findByText(data.blogName)).toBeInTheDocument();
    expect(await screen.findByRole("list")).toBeInTheDocument();
  });
});
