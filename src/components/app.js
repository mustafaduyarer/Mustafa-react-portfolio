import React, { Component } from "react";
import moment from "moment/moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog.js";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NoMatch from "./pages/no-match";

export default class App extends Component {

 
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <h1>Mustafa Duyarer DevCamp React Starter</h1>
            <h2>
              <div>{moment().format("Do MMMM YYYY, h:mm:ss a")}</div>
            </h2>
            <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route
                exact
                path="/portfolio/:slug"
                component={PortfolioDetail}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
