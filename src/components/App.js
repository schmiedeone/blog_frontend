import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Article from "./section/Article";
import Footer from "./footer/Footer";
import Intro from "./section/Intro";
import NavBar from "./header/NavBar";
import Section from "./section/Section";
import Query from "./Query";

import client from "../utils/apolloClient";
import data from "../utils/data";

import ARTICLES_QUERY from "../queries/article/articles";
import AUTHOR_ARTICLES_QUERY from "../queries/author/articles";
import AUTHORS_QUERY from "../queries/author/authors";
import CATEGORY_ARTICLES_QUERY from "../queries/category/articles";
import CATEGORIES_QUERY from "../queries/category/categories";
import LATEST_ARTICLE_QUERY from "../queries/article/lastest_articles";
import MESSAGES_QUERY from "../queries/message/messages";

import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#141414",
      contrastText: "#EBEBEB",
    },
  },
});

const messageKey = {
  welcome: 1,
  about: 2,
};

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
                      <div>
                        <Query query={MESSAGES_QUERY} id={messageKey.welcome}>
                          {({ data }) => {
                            return (
                              <Intro
                                title={data.message.name}
                                description={data.message.description}
                                image={data.message.image}
                              />
                            );
                          }}
                        </Query>
                        <Section
                          query={LATEST_ARTICLE_QUERY}
                          queryName={"articles"}
                          title={"what's new"}
                        />
                        <Section
                          query={ARTICLES_QUERY}
                          queryName={"articles"}
                          title={"our articles"}
                        />
                      </div>
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

                  <Route
                    exact
                    path="/about"
                    component={() => (
                      <Query query={MESSAGES_QUERY} id={messageKey.about}>
                        {({ data }) => {
                          return (
                            <Intro
                              title={data.message.name}
                              description={data.message.description}
                              image={data.message.image}
                            />
                          );
                        }}
                      </Query>
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
