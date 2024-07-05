import React, { Component } from "react"; //class based component
import axios from "axios";

import PortfolioItem from "./portfolio-item";
//State
//Lifecycle hooks

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    // console.log("Portfolio container has rendered");

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
    };
    this.handleFilter = this.handleFilter.bind(this);
   
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter((item) => {
        return item.category === filter;
      }),
    });
  }

  getPortfolioItems() {
    axios.get("https://mustafaduyarer.devcamp.space/portfolio/portfolio_items")
  .then(response => {
    // handle success
  
    this.setState({
      data: response.data.portfolio_items
    })
  })
  .catch(error=> {
    // handle error
    console.log(error);
  });
  }


  portfolioItems() {
    // const data = ["kartal", "Mevlana","aktisad","swerige zaman"];

    return this.state.data.map((item) => {
      console.log('item data', item);
      
      return <PortfolioItem key={item.id} title={item.name} url={item.url} slug={item.id} />;
      //return <h1>{item}</h1>
    });
  }

  componentDidMount(){
    this.getPortfolioItems();

  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{this.state.pageTitle}</h1>
        <h2>Portfolio items go here updated...</h2>

        <button onClick={() => this.handleFilter("eCommerce")}>
          eCommerce
        </button>
        <button onClick={() => this.handleFilter("Scheduling")}>
          Scheduling
        </button>
        <button onClick={() => this.handleFilter("Enterprise")}>
          Enterprise
        </button>

        {this.portfolioItems()}
      </div>
    );
  }
}
