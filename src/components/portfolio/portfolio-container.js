import React, { Component } from "react"; //class based component

import PortfolioItem from "./portfolio-item";
//State
//Lifecycle hooks


export default class PortfolioContainer extends Component {
  constructor() {
    super();
    console.log("Portfolio container has rendered");

  }
  render() {
    return (
      <div>
        <h2>Portfolio items go here ...</h2>
        <h2>Portfolio items go here updated...</h2>

        <PortfolioItem/>
      </div>
    );
  }
}