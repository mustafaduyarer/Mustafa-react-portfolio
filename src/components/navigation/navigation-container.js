import React, { Component } from "react";

export default class NavigationComponent extends Component {
    constructor(){
        super();

    }

  render() {
    return (
      <div>
        <h1>MD</h1>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
        <button>Blog</button>
        {false ? <button>Add Blog</button> : null}
      </div>
    );
  }
}
