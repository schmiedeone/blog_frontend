import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Card from "../components/Card"

const article = {
  category: { id: "3", name: "#creation", __typename: "Category" },
  id: "1",
  image: [{ url: "/uploads/me_65ebb514cd.jpeg", __typename: "UploadFile" }],
  title: "Creating a blog at Schiede.One",
  __typename: "Article",
};

describe("Card", () => {
  test("Render a single Card", () => {


    render(
      <Router> 
        <Card article={article} key={`article__${article.id}`} />
      </Router>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(article.category.name)).toBeInTheDocument();
    expect(screen.getByText(article.title)).toBeInTheDocument();
    expect(screen.getByLabelText("card")).toBeInTheDocument();
  });
});
