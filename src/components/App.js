import React from "react";
import { Route, Switch } from "react-router-dom";

import Article from "./Article";
import Content from "./Content";
import Nav from "./Nav";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Content} exact />
        <Route path="/article/:id" component={Article} exact />
      </Switch>
    </div>
  );
}

export default App;
