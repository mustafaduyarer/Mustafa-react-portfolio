import React, { Component } from "react";
import moment from "moment/moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog.js";



export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
            </Switch>
          </div>
        </Router>

        <h1>Mustafa Duyarer DevCamp React Starter</h1>
        <PortfolioContainer />

        <h1>
          <div>{moment().format("Do MMMM YYYY, h:mm:ss a")}</div>
        </h1>
      </div>
    );
  }
}
