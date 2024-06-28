import React, { Component } from 'react';
import moment from 'moment/moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Mustafa Duyarer DevCamp React Starter</h1>
        <h2>
        <div>
          {moment().format('Do MMMM YYYY, h:mm:ss a')}
        </div>
        </h2>
        
        
      </div>
    );
  }
}
