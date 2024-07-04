import React, { Component } from "react"; //class based component

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
      data: [
        { title: "kartal", category: "eCommerce", slug: "kartal" },
        { title: "Mevlana", category: "Scheduling", slug: "Mevlana" },
        { title: "aktisad", category: "Enterprise", slug: "aktisad" },
        {
          title: "swerige zaman",
          category: "eCommerce",
          slug: "swerige-zaman",
        },
      ],
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

  portfolioItems() {
    // const data = ["kartal", "Mevlana","aktisad","swerige zaman"];

    return this.state.data.map((item) => {
      return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />;
      //return <h1>{item}</h1>
    });
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
