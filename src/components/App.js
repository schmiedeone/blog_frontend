import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Article from "./section/Article";
import Footer from "./footer/Footer";
import NavBar from "./header/NavBar";
import SubDeck from "./section/SubDeck";

import client from "../utils/apolloClient";
import data from "../utils/data";

import ARTICLES_QUERY from "../queries/article/articles";
import CATEGORY_ARTICLES_QUERY from "../queries/category/articles";
import CATEGORIES_QUERY from "../queries/category/categories";
import AUTHOR_ARTICLES_QUERY from "../queries/author/articles";
import AUTHORS_QUERY from "../queries/author/authors";

import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <NavBar name={data.blogName} />
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <SubDeck query={ARTICLES_QUERY} queryName={"articles"} />
                )}
              />
              <Route
                exact
                path="/category/:id"
                component={() => (
                  <SubDeck
                    query={CATEGORY_ARTICLES_QUERY}
                    queryName={"category"}
                  />
                )}
              />
              <Route
                exact
                path="/author/:id"
                component={() => (
                  <SubDeck query={AUTHOR_ARTICLES_QUERY} queryName={"author"} />
                )}
              />
              <Route
                exact
                path="/categories"
                component={() => (
                  <SubDeck
                    query={CATEGORIES_QUERY}
                    queryName={"categories"}
                  />
                )}
              />
              <Route
                exact
                path="/authors"
                component={() => (
                  <SubDeck
                    query={AUTHORS_QUERY}
                    queryName={"authors"}
                  />
                )}
              />
              <Route path="/article/:id" component={Article} exact />
            </Switch>
            <Footer footerText={data.footerText} />
          </div>
        </ThemeProvider>
      </ApolloProvider>
    </Router>
  );
}

export default App;
