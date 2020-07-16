import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Article from "./section/Article";
import Footer from "./footer/Footer";
import NavBar from "./header/NavBar";
import Section from "./section/Section";

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
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#383842",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <div style={{ backgroundColor: theme.palette.primary.main }}>
              <NavBar name={data.blogName} />

              <React.StrictMode>
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={() => (
                      <Section query={ARTICLES_QUERY} queryName={"articles"} />
                    )}
                  />
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
                  <Route
                    exact
                    path="/author/:id"
                    component={() => (
                      <Section
                        query={AUTHOR_ARTICLES_QUERY}
                        queryName={"author"}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/categories"
                    component={() => (
                      <Section
                        query={CATEGORIES_QUERY}
                        queryName={"categories"}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/authors"
                    component={() => (
                      <Section query={AUTHORS_QUERY} queryName={"authors"} />
                    )}
                  />
                  <Route path="/article/:id" component={Article} exact />
                </Switch>
                <Footer footerText={data.footerText} />
              </React.StrictMode>
            </div>
          </div>
        </ThemeProvider>
      </ApolloProvider>
    </Router>
  );
}

export default App;
