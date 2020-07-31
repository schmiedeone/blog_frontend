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
// import Query from "./Query";
import SlugQuery from "./SlugQuery";

import client from "../utils/apolloClient";
import data from "../utils/data";
import ARTICLE_SLUG_QUERY from "../queries/article/article_by_slug";
import ARTICLES_QUERY from "../queries/article/articles";
import AUTHOR_ARTICLES_QUERY from "../queries/author/articles";
import AUTHOR_ARTICLES_SLUG_QUERY from "../queries/author/articles_by_slug";
import AUTHORS_QUERY from "../queries/author/authors";
import CATEGORY_ARTICLES_QUERY from "../queries/category/articles";
import CATEGORY_ARTICLES_SLUG_QUERY from "../queries/category/articles_by_slug";
import CATEGORIES_QUERY from "../queries/category/categories";
import LATEST_ARTICLE_QUERY from "../queries/article/lastest_articles";
// import MESSAGES_QUERY from "../queries/message/messages";
import MESSAGE_SLUG_QUERY from "../queries/message/message_by_slug";

import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#141414",//"#EBEBEB",
      contrastText: "#EBEBEB",//"#141414",
    },
  },
});

const messageKey = {
  welcome: "5f1ef6a08f9380001ce10bc3",
  about: "5f1ef6d48f9380001ce10bc5",
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
                        <SlugQuery query={ARTICLE_SLUG_QUERY} slug={"creating-the-schmiedev-blog"}>
                          {({ data }) => {
                            console.log(data)
                            return (
                              <div
                              />
                            );
                          }}
                        </SlugQuery>
                        <SlugQuery query={MESSAGE_SLUG_QUERY} slug={"welcome"}>
                          {({ data }) => {
                            return (
                              <Intro
                                title={data.messages[0].name}
                                description={data.messages[0].description}
                                image={data.messages[0].image}
                              />
                            );
                          }}
                        </SlugQuery>
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
                    path="/category/:slug"
                    component={() => (
                      <Section
                        query={CATEGORY_ARTICLES_SLUG_QUERY}
                        queryName={"categories"}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/author/:slug"
                    component={() => (
                      <Section
                        query={AUTHOR_ARTICLES_SLUG_QUERY}
                        queryName={"authors"}
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
                      <SlugQuery query={MESSAGE_SLUG_QUERY} slug={"about"}>
                        {({ data }) => {
                          return (
                            <Intro
                              title={data.messages[0].name}
                              description={data.messages[0].description}
                              image={data.messages[0].image}
                            />
                          );
                        }}
                      </SlugQuery>
                    )}
                  />
                  <Route path="/article/:slug" component={Article} exact />
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
