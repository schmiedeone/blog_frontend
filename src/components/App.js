import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Article from "./Article";
import Author from "./Author";
import Category from "./Category";
import Content from "./Content";
import NavBar from "./NavBar";
import Footer from "./Footer";

import client from "../utils/apolloClient";
import data from "../utils/data";

import "./App.css";

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <NavBar name={data.blogName} />
          <Switch>
            <Route path="/" component={Content} exact />
            <Route path="/article/:id" component={Article} exact />
            <Route path="/category/:id" component={Category} exact />
            <Route path="/author/:id" component={Author} exact />
          </Switch>
          <Footer footerText={data.footerText}/>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
