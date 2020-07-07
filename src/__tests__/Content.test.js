import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Content from "../components/Content";
import client from "../utils/apolloClient";
import data from "../utils/data";

describe("Content", () => {
  test("Content renders properly", async () => {
    render(
      <Router>
        <ApolloProvider client={client}>
          <Content blogName={data.blogName}/>
        </ApolloProvider>
      </Router>
    );
    expect(await screen.findByText(data.blogName)).toBeInTheDocument();
    expect(await screen.findByLabelText("deck")).toBeInTheDocument();
    expect(await screen.findAllByLabelText("card"));
    expect(await screen.findAllByRole("heading"));
  });
});
