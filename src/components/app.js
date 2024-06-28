import React, { Component } from 'react';
import moment from 'moment/moment';

import PortfolioContainer from "./portfolio-container";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Mustafa Duyarer DevCamp React Starter</h1>
        <PortfolioContainer/>
        <PortfolioContainer/>
        <PortfolioContainer/>
        
        <h1>
        <div>
          {moment().format('Do MMMM YYYY, h:mm:ss a')}
        </div>
        </h1>
        
        
      </div>
    );
  }
}
