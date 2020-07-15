import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Article from "./Article";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SubDeck from "./SubDeck";

import client from "../utils/apolloClient";
import data from "../utils/data";

import ARTICLES_QUERY from "../queries/article/articles";
import CATEGORY_ARTICLES_QUERY from "../queries/category/articles";
import AUTHOR_ARTICLES_QUERY from "../queries/author/articles";

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
              <Route path="/article/:id" component={Article} exact />
              <Route exact path="/" component={() => <SubDeck query={ARTICLES_QUERY} queryName={"articles"}/>} />
              <Route exact path="/category/:id" component={() => <SubDeck query={CATEGORY_ARTICLES_QUERY} queryName={"category"}/>} />
              <Route exact path="/author/:id" component={() => <SubDeck query={AUTHOR_ARTICLES_QUERY} queryName={"author"}/>} />
            </Switch>
            <Footer footerText={data.footerText} />
          </div>
        </ThemeProvider>
      </ApolloProvider>
    </Router>
  );
}

export default App;
