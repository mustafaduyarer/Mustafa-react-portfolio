import React, { Component } from 'react';
import moment from 'moment/moment';

import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from './navigation/navigation-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>Mustafa Duyarer DevCamp React Starter</h1>
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
