import React, { Component } from "react"; //class based component

import PortfolioItem from "./portfolio-item";
//State
//Lifecycle hooks


export default class PortfolioContainer extends Component {
  constructor() {
    super();
    console.log("Portfolio container has rendered");

  }
portfolioItems(){
  const data = ["kartal", "Mevlana","aktisad","swerige zaman"];

  return data.map(item => {
    return <PortfolioItem/>;
   //return <h1>{item}</h1>
  })
}



  render() {
    return (
      <div>
        <h2>Portfolio items go here ...</h2>
        <h2>Portfolio items go here updated...</h2>
      
        {this.portfolioItems()}
       
      </div>
    );
  }
}