import React, { Component } from "react"; //class based component

import PortfolioItem from "./portfolio-item";
//State
//Lifecycle hooks


export default class PortfolioContainer extends Component {
  constructor() {
    super();
    // console.log("Portfolio container has rendered");
    this.state= {
      pageTitle: "Welcome to my portfolio",
      data: [
        {title: "kartal"}, 
        {title: "Mevlana"},
        {title: "aktisad"},
        {title: "swerige zaman"}
      ]
    };

  }
portfolioItems(){
 // const data = ["kartal", "Mevlana","aktisad","swerige zaman"];

  return this.state.data.map(item => {
   return <PortfolioItem title={item.title} url={"google.com"}/>;
   //return <h1>{item}</h1>
  });
}



  render() {
    return (
      <div>
        <h1>{this.state.pageTitle}</h1>
        <h2>Portfolio items go here updated...</h2>
      
        {this.portfolioItems()}
       
      </div>
    );
  }
}